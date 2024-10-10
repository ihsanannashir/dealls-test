import { IS_BROWSER } from "@/utils/constants";
import { useMemo } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

const SocialShare = ({ text, url }: { text?: string; url?: string }) => {
  const origin = useMemo(() => {
    if (IS_BROWSER) {
      return window.location.href;
    }
  }, []);

  return (
    <div className="flex flex-row gap-x-1">
      <FacebookShareButton url={url ? url : origin || ""} quote={text}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <WhatsappShareButton url={url ? url : origin || ""} title={text}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <TwitterShareButton url={url ? url : origin || ""} title={text}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton url={url ? url : origin || ""}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  );
};

export default SocialShare;
