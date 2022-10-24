import './postTypes.scss';
import flowerImg from '../../../assets/img/flower.svg';
import addSvg from '../../../assets/img/add.svg';
import plusSvg from '../../../assets/img/plus.svg';
import binIcon from '../../../assets/img/bin.svg';
import photoIcon from '../../../assets/img/photo-icon.svg';
import videoIcon from '../../../assets/img/video-icon.svg';
import flyIcon from '../../../assets/img/fly.svg';
import { useState } from 'react';

const images: any[] = [
    {imageUrl: flowerImg},
    {imageUrl: flowerImg},
    {imageUrl: flowerImg},
    {imageUrl: flowerImg}
]

const PostTypes = () => {
  const [image, setImages] = useState(images);
  const onSelectFile = (event: any) => {
    const files = event.target? event.target.files : event;
    const file = files && files.length;
    if(file > 0 && file < 6) {
        let i = 0;
        for (const singlefile of files) {
            var reader = new FileReader();
            reader.readAsDataURL(singlefile);
            i++;
            reader.onload = (fileEvent) => {
                let url = (fileEvent.target)?.result as string;
                image.push({imageUrl: url});
                console.log(image)
            }
        }
    }
    setImages(image);
}
return (
<div className='post-type-card'>
    <div className='d-flex flex-column inline-card'>
        <div className='d-flex justify-content-between'>
            <span className='add-thoughts'>Add your thoughts...</span>
            <img alt='bin' src={binIcon}/>
        </div>
        <span className='thoughts'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas metus sagittis, interdum egestas pharetra lorem in auctor enim. Dolor morbi malesuada phasellus feugiat nascetur faucibus ullamcorper tellus nec. Nunc magna ut felis, condimentum. Nulla orci venenatis vitae mattis at et dolor. Adipiscing morbi in feugiat habitasse orci fusce molestie tellus sit.
        Felis gravida a maecenas arcu aliquet. Sed mattis tristique sed neque eget laoreet ut. Etiam quam pulvinar enim eu, purus turpis vivamus. Sollicitudin morbi orci massa posuere volutpat nulla. Diam.
        </span>
        {image.map((image: any, index: number) => {
            return (
                <>
                {index === 0 && <div className='main-image position-relative'>
                        <img className='flower-img' alt='main-img-rounded' src={image.imageUrl}/>
                        <div className='position-absolute cross-icon-img'>&#10005;</div>
                    </div>
                }
                </>
            )
        })}
        <div className='smaller-img-div d-flex justify-content-between'>
        {image.map((image: any, index: number) => {
            return (
                <>
                    {index > 0 &&
                        <div className='overlay-absolute'>
                            <img className='smaller-img mx-2' alt='smaller' src={image.imageUrl}/>
                            <div className='overlay'>
                                <div className='overlay-icon'>&#10005;</div>
                            </div>
                        </div>
                    }
                </>
            )
        })}
        {image.length < 5 &&
        <div className='add-button position-relative'>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <img alt='addition' className='object-cover px-4 pt-3' src={addSvg}/>
                <img alt='imgs' className='object-cover px-4 position-absolute mt-3' src={plusSvg}/>
                <input className='position-absolute cursor-pointer input-img' type="file" accept=".png, .jpg, .jpeg" onChange={onSelectFile}/>
            </div>
        </div>
        }
        </div>
    </div>
    <div className='bottom-div position-relative'>
        <div className='d-flex justify-content-start mx-5'>
            <div className='d-flex justify-content-start mt-4 mx-5'>
                <img alt='icon-a' src={photoIcon}/>
                <span className='photo-txt ms-2'>Add more</span>
            </div>
            <div className='vertical-line position-absolute'></div>
            <div className='d-flex justify-content-start mt-4 mx-5'>
                <img alt='icon-a' src={videoIcon}/>
                <span className='photo-txt ms-2'>Video</span>
            </div>
        </div>
        <div className='fly'>
            <div className='d-flex justify-content-start mt-4 mx-5'>
                <img alt='icon-a' src={flyIcon}/>
            </div>
        </div>
    </div>
</div>
)
}

export default PostTypes
