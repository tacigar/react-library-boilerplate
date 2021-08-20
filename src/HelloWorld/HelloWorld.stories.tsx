import { storiesOf } from '@storybook/react';
import HelloWorld from './HelloWorld';

storiesOf('HelloWorld', module).add('Hello, Tacigar', () => (
  <HelloWorld name="Tacigar" />
));
