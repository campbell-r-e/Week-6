import store from './app/store'
import { Provider } from 'react-redux'
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
document.getElementById('root')
)
