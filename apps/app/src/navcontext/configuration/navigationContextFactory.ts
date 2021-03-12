// import { ENV } from '../../configuration'
import { ReactNavigationInteractor } from '../adapter/real/ReactNavigationInteractor'
import { NavigationInteractor } from '@lib/common-context/navcontext/domain/gateways/Navigation.interactor'
import { InMemoryNavigationInteractor } from '@lib/common-context/navcontext/adapter/inmemory/InMemoryNavigationInteractor'


const ENV: 'production' | 'dev' = 'dev';
export class NavigationContextFactory {
  static navigationInteractor(): NavigationInteractor {
    switch (ENV) {
      case 'production':
        return new ReactNavigationInteractor()
      case 'dev':
        return new ReactNavigationInteractor()

      default:
        return new InMemoryNavigationInteractor()
    }
  }
}
