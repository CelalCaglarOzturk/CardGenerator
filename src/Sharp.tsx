import sharp from 'sharp';

const Sharp = () => {
 async function resizeImage() {
     await sharp('/assets/Effect_cart.jpg')
    .resize({ width: 100 })
    .toFile('image2.jpg')
 }

  return ( 
    <div>
      <h1>Sharp</h1>
    </div>
   );
}
 
export default Sharp;