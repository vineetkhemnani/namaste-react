import { render } from '@testing-library/react';
import Header from '../Header';
import { Provider } from 'react-redux';
import store from '../../utils/store';
test("Logo should load on rendering header", () => {
    // load header
    const header = render(
      <Provider store={store}>
        <Header />
      </Provider>
    )
    console.log(header)
    // check if logo is loaded
})