import ListComponent from "../components/ListComponent";
import Layout from "../components/Layout";


function List() {
    return(
        <main>
            <Layout 
                children={<ListComponent />}
            /> 
        </main>
    );
}    
    
export default List;