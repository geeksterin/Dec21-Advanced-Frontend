const geekContext = React.createContext();

//when you want to give some data (provide)
const GeekProvider = geekContext.Provider;

// when you want to have access to that data (consume that data)
const GeekConsumer = geekContext.Consumer;
