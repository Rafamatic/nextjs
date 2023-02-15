
const Button = ({ children }:any) =>{
    console.log(children);
    
    return (
        <>
            <button className="py-3 px-3 my-3 mx-3 bg-blue-400 text-white rounded-md">
                {children}
            </button>
        </>
    );
}
    
    export default Button;