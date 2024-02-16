import useAllProperties from "../../../Hooks/useAllProperties";

const Properties = () => {

    const [allProperty] = useAllProperties();
    console.log(allProperty);

    return (
        <div>
            
        </div>
    );
};

export default Properties;