import {isWeb, isWeex} from 'universal-env';
import Host from './vdom/host';
import EmptyComponent from './vdom/empty';
import NativeComponent from './vdom/native';
import TextComponent from './vdom/text';
import CompositeComponent from './vdom/composite';
import FragmentComponent from './vdom/fragment';
import WeexDriver from './drivers/weex';
import BrowserDriver from './drivers/browser';
import Hook from './debug/hook';

export default function inject({driver, hook}) {
  // Inject component class
  Host.EmptyComponent = EmptyComponent;
  Host.NativeComponent = NativeComponent;
  Host.TextComponent = TextComponent;
  Host.FragmentComponent = FragmentComponent;
  Host.CompositeComponent = CompositeComponent;
  // Inject devtool hook
  Host.hook = hook || Hook;

  // Inject render driver
  if (!Host.driver) {
    if (!driver) {
      if (isWeex) {
        driver = WeexDriver;
      } else if (isWeb) {
        driver = BrowserDriver;
      } else {
        throw Error('No builtin driver matched');
      }
    }
    Host.driver = driver;
  }
}