const router = {
  asPath: '/',
  back: () => {},
  basePath: '',
  beforePopState: () => {},
  events: {
    emit: () => {},
    off: () => {},
    on: () => {}
  },
  isFallback: false,
  isLocaleDomain: false,
  isPreview: false,
  isReady: true,
  pathname: '/',
  prefetch: async () => {},
  push: async () => true,
  query: {},
  reload: () => {},
  replace: async () => true,
  route: '/'
}

const useRouter = () => router

module.exports = {
  Router: router,
  default: router,
  useRouter,
  withRouter: Component => Component
}
