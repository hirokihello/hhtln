const gulp = require("gulp");
const awspublish = require("gulp-awspublish");
const parallelize = require("concurrent-transform");
const cloudfront = require("gulp-cloudfront-invalidate-aws-publish");

const config = {
  params: {
    Bucket: process.env.AWS_BUCKET_NAME
  },
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    signatureVersion: "v3"
  },
  deleteOldVersions: false, // PRODUCTION で使用しない
  distribution: process.env.AWS_CLOUDFRONT, // CloudFront distribution ID
  region: process.env.AWS_DEFAULT_REGION,
  headers: {
    /*'Cache-Control': 'max-age=315360000, no-transform, public',*/
  },
  distDir: "build",
  indexRootPath: true,
  cacheFileName: ".awspublish",
  concurrentUploads: 10,
  wait: true // CloudFront のキャッシュ削除が完了するまでの時間（約30〜60秒）
};

gulp.task("deploy", function() {
  const publisher = awspublish.create(config);
  let g = gulp.src(`./${config.distDir}/**`);
  g = g.pipe(parallelize(publisher.publish(config.headers), config.concurrentUploads));

  if (config.distribution) {
    g = g.pipe(cloudfront(config));
  }
  if (config.deleteOldVersions) g = g.pipe(publisher.sync());
  g = g.pipe(publisher.cache());
  g = g.pipe(awspublish.reporter());
  return g;
});
