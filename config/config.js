import pageRoutes from './router.config';

export default {
  treeShaking: true,
  routes: pageRoutes,
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: { webpackChunkName: true },
        title: 'admin',
        dll: false,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,

            /components\//,
          ],
        },
      },
    ],
  ],
};
