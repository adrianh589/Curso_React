/**
 *
 * @param initialState El state puede retornar cualquier cosa, string, array, etc. En este caso pues retornamos
 * un arreglo por el curso NOTA: EL PUSH ESTA PROHIBIDO USARLO porque modifica el array original
 * en su defecto el filter es mejor opcion porque devuelve un nuevo arreglo
 * @param action
 * @returns {{}|*[]}
 */
export const todoReducer = (initialState = [], action) => {
    console.log(action.payload);
  switch (action.type) {
      case '[TODO] Add Todo':
          return [ ...initialState, action.payload ]
      case '[TODO] Remove Todo':
          return initialState.filter( todo => todo.id !== action.payload )
      case '[TODO] Toggle Todo':
          return initialState.map( todo => {

              if (todo.id === action.payload) {
                  return {
                      ...todo,
                      done: !todo.done
                  }
              }

              return todo;
          });
      default:
          return initialState;
  }
}
