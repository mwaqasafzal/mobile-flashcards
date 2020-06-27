export const shapeTheDeck = title => {
  /*
  will create an object of form
   {
      title,
      questions:[]
  }
  */
  return {
    [title]:{
      title,
      questions:[]
    }
  }
}