import React from 'react';
import { Link } from 'gatsby';

function PostPreview(props) {
    console.log(props);
    
      if (props) {
    
        const date = new Date(props.postInfo.date);
        const day = date.getUTCDate().toString();
        const month = date.getMonth();
        const year = date.getUTCFullYear().toString();
    
        const monthNames = [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
    
        const dateStr = monthNames[month] + " " + day + ", "  + year;
    
        let postPreview = props.postInfo.content;
    
        if (postPreview.length > 150) {
          postPreview = postPreview.substr(0, 150) + ".....Read More";
        } 
        
        return (
            <div className="hover:underline">
                <Link to={"/post/" + props.postInfo.slug}>
                    <div className="mb-4">
                        <h4 className="text-2xl md:text-4xl text-gray-500 underline">{props.postInfo.title}</h4>
                        <i className="font-italic">{dateStr}</i>
                          <div dangerouslySetInnerHTML={{__html: postPreview}} />
                    </div>
                </Link>
            </div>
        );
    
      } else return null;
    }

export default PostPreview;