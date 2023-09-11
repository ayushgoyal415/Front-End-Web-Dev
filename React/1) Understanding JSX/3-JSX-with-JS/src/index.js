import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));

//. While within JSX when anything is written within { }, it is treated as JS
//. While within JS when anything is written within <></>, it is treated as JSX

const colors = ['Violet', 'Indigo', 'Blue', 'Green', 'Yellow', 'Red'];

function Colors1() {
  return (
    <div>
      {colors.map(function (i) {
        return <h3>{i}</h3>;
      })}
    </div>
  );
}

function Colors2() {
  return (
    //~ JSX ---------------------------------------------------------------
    <div>
      {
        //+ JS-------------------------------------------------------------
        colors.map(function (i) {
          return (
            //. JSX--------------------------------------------------------
            <h3>
              {
                // JS------------------------------------------------------
                i
                // JS------------------------------------------------------
              }
            </h3>
            //. JSX--------------------------------------------------------
          );
        })
        //+ JS-------------------------------------------------------------
      }
    </div>
    //~ JSX ---------------------------------------------------------------
  );
}

root.render(
  <>
    <Colors1 />
    <Colors2 />
  </>
);
