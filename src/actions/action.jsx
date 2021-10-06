export const sepeteEkle = (book) => {
  return {
    type: "SEPETE_EKLE",
    payload: book,
  };
}; //Action creator ile bi tane action oluşturduk.

//burada action.type ve action.payload u tanımladık.

//düğmeye bastığımız zaman bu fonksiyon çağrılacak ve reduce taki action çalışacak.

//onClick olduğunda
