import { Options } from "react-lottie";

export default function getLottieConfig(anim:any):Options{
    return {
        loop: true,autoplay:true,
        animationData: anim,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
}