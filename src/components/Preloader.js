import { Oval } from 'react-loader-spinner';

function Preloader() {
  return (
    <div className="preloader">
      <Oval
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        strokeWidth={5}
        strokeWidthSecondary={5}
      />
    </div>
  );
}

export default Preloader;