/*
1. Внутри компонентов мы можем использовать JS-выражения. 
Такие выражения делают наши компоненты динамическими. 
Чтобы вывести JS-выражение в JSX, нужно использовать фигурные скобки.
*/
// ************************************************************************

export const Page = () => {
    const logoUrl = "https://picsum.photos/100";
    const siteName = "example.com";
  
    return (
      <>
        <header>
  
          {/* Можем использовать как контент */}
          <div>{siteName}</div> 
          
          {/* Можем использовать в атрибутах */}
          <img src={logoUrl} alt="logo"/>
  
        </header>
        <footer>подвал</footer>
      </>
    );
  };

  /*
  2. С помощью такого синтаксиса мы можем прямо в JSX вывести JS-выражения, 
вызвать функции или вывести переменные, в том числе JSX-элементы.
*****************************************************************************/

export const Page1 = () => {
    const logoUrl = "";
    const siteName = "example.com";
   
    return (
      <>
        <header>
          {/* Тернарное выражение. Если у нас есть лого то вывести его иначе название сайта */}
          {logoUrl ? (
            <img src={logoUrl} alt="logo"/>
          ) : (
            <div>{siteName}</div>
          )}
        </header>
        <footer>подвал</footer>
      </>
    );
   };

   /*
3. Однако такой способ inline-выражений не всегда удобен. 
Поэтому мы можем использовать вызов функций.
   */

export const Page2 = () => {
    const logoUrl = "";
    const siteName = "example.com";
  
    const getHeadline = () => {
      return logoUrl ? (
        <img src={logoUrl} alt="logo"/>
      ) : (
        <div>{siteName}</div>
      );
    };
  
    return (
      <>
        <header>{getHeadline()}</header>
        <footer>подвал</footer>
      </>
    );
  };
