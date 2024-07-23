/* eslint-disable @typescript-eslint/no-explicit-any */

const AppMain = (props : any) => {
    return (
        <div className='m-4 rounded'>
            {props.children}
        </div>
    );
}

export default AppMain;
