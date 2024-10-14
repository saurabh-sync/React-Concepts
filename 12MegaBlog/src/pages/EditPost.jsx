// // import { useEffect, useState } from "react";
// // import { Container, PostForm } from "../components";
// // import appwriteService from "../appwrite/config";
// // import { useNavigate, useParams } from "react-router-dom";

// // function EditPost() {
// //   const [post, setPosts] = useState(null);
// //   const { slug } = useParams();
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     if (slug) {
// //       appwriteService.getPost(slug).then((post) => {
// //         if (post) {
// //           setPosts(post);
// //         }
// //       });
// //     } else {
// //       navigate("/");
// //     }
// //   }, [slug, navigate]);
// //   return post ? (
// //     <div className="py-8">
// //       <Container>
// //         <PostForm post={post} />
// //       </Container>
// //     </div>
// //   ) : null;
// // }

// // export default EditPost;

// import { useEffect, useState } from "react";
// import { Container, PostForm } from "../components";
// import appwriteService from "../appwrite/config";
// import { useNavigate, useParams } from "react-router-dom";
// import { useSelector } from "react-redux"; // Assuming you're using Redux for state management

// function EditPost() {
//   const [post, setPosts] = useState(null);
//   const { slug } = useParams();
//   const navigate = useNavigate();
//   const userData = useSelector((state) => state.auth.userData);
//   // const isAuthor = post && userData ? post.userId === userData.$id : false;
//   useEffect(() => {
//     if (slug) {
//       appwriteService.getPost(slug).then((post) => {
//         if (post) {
//           setPosts(post);
//           if (post.userId !== userData?.$id) {
//             // alert("You are not authorized to access this page.");
//             navigate("/");
//           }
//         }
//       });
//     } else {
//       navigate("/");
//     }
//   }, [slug, navigate, userData?.$id]);

//   return post ? (
//     <div className="py-8">
//       <Container>
//         <PostForm post={post} />
//       </Container>
//     </div>
//   ) : null;
// }

// export default EditPost;

import { useEffect, useRef, useState } from "react";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux"; // Assuming you're using Redux for state management

function EditPost() {
  const [post, setPosts] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const alertShownRef = useRef(false);

  useEffect(() => {
    if (slug) {
      const fetchPostData = async () => {
        const post = await appwriteService.getPost(slug);
        if (post) {
          if (post.userId !== userData?.$id) {
            if (!alertShownRef.current) {
              alert("You are not authorized to access this page.");
              alertShownRef.current = true;
            }
            navigate("/");
          } else {
            setPosts(post);
          }
        } else {
          navigate("/");
        }
      };

      fetchPostData();
    } else {
      navigate("/");
    }
  }, [slug, navigate, userData?.$id]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
