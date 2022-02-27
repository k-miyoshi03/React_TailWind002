import {Source, Img} from '../components/index';

const Picture = (props) => {
    return (
        <picture className={props.className}>
            {/* <Source media={props.media} mediaSrc={props.mediaSrc} /> */}
            {props.media.map((data, idx) => {
                return (<Source key={idx} media={data['media']} mediaSrc={data['mediaSrc']} />)
            })}
            <Img src={props.src}/>
        </picture>
    );
};

export default Picture;