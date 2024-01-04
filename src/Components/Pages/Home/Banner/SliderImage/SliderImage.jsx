const SliderImage = ({img}) => {
    return (
        <>
            <img
                className="object-cover rounded-xl h-[450px] lg:h-[600px]"
                src={img}
                alt=""
              />
        </>
    );
};

export default SliderImage;