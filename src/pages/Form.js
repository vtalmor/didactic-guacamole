
import FormComponent from "../components/FormComponent";
import Layout from "../components/Layout";

function Form() {
    return(
        <main>
            <Layout 
                children={<FormComponent />}
            /> 
        </main>
    );
}    
    
export default Form;