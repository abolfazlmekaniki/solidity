import React from "react";

var CounterStateContext = React.createContext();
var CounterDispatchContext = React.createContext();

function counterReducer(state, action) {

}

function CounterProvider({children}) {
  var [state, dispatch] = React.useReducer(counterReducer, {
    login_info:[],
  });
  return (
    <CounterStateContext.Provider value={state}>
      <CounterDispatchContext.Provider value={dispatch}>
        {children}
      </CounterDispatchContext.Provider>
    </CounterStateContext.Provider>
  );
}

function useCounterState() {
  var context = React.useContext(CounterStateContext);
  if (context === undefined) {
    throw new Error("useLayoutState must be used within a LayoutProvider");
  }
  return context;
}

function useCounterDispatch() {
  var context = React.useContext(CounterDispatchContext);
  if (context === undefined) {
    throw new Error("useLayoutDispatch must be used within a LayoutProvider");
  }
  return context;
}

export {CounterProvider, useCounterState, useCounterDispatch};

// ###########################################################

