/* eslint-disable @typescript-eslint/no-explicit-any */

const AppMain = (props : any) => {
    return (
        <div className='m-4 mt-16 rounded'>
            {props.children}
        </div>
    );
}

export default AppMain;
