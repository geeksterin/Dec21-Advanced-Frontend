hooks -

- useRef ✅
- useMemo ✅
- useContext ✅
- useCallback ✅

- const contextValue = useContext(arg); //arg to useContext is the context from where you want to read the value from

- useMemo saves the result of the Fn and that result is same between component rerenders

- useCallback saves the Fn reference and that reference is same between rerenders
