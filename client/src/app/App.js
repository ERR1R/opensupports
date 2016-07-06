import React              from 'react';
import Reflux             from 'reflux';
import {ListenerMixin}    from 'reflux';
import {RouteHandler}     from 'react-router';

import CommonActions      from 'actions/common-actions';
import CommonStore        from 'stores/common-store';

let App = React.createClass({

    mixins: [Reflux.listenTo(CommonStore, 'onCommonStoreChanged')],

    render() {
        return (
          <div>
              {React.cloneElement(this.props.children, {})}
          </div>
        );
    },

    onCommonStoreChanged(change) {
        if (change === 'i18n') {
            this.forceUpdate();
        }
    }
});

export default App;