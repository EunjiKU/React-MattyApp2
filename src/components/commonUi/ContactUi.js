import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { allUserApi, contactApi } from '../../api/index';

const ContactUi = () => {
  const userIdValue = useSelector(state => state.user.userId);
  const test = useSelector(state => state.user.accessToken);
  
  useEffect(() => {
    console.log(userIdValue);
    console.log(test);
    allUserApi()
      .then((response) => {
        response.data.forEach(item => {
          if(item.EMAIL === userIdValue) {
            console.log(item.EMAIL);
            console.log(test);
          }
        });
      })
      .catch(err => console.log("연락처 에러!!!"))
  }, []);

  // const userImgUrl = useSelector(state => state.user.userImgUrl);
  // const userIdValue = useSelector(state => state.user.userId);
  // // const [depthNum, setDepthNum] = useState("");
  // const [depthItem, setDepthItem] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const allUserItem = await allUserApi();
  //       const myUserItem = allUserItem.data.find(item => item.EMAIL === userIdValue);

  //       if (myUserItem) {
  //         // setDepthNum(myUserItem.DEPT_CODE);
  //         const contactUserItem = await contactApi(myUserItem.DEPT_CODE);
  //         setDepthItem(contactUserItem.data);
  //       }
  //     } catch (error) {
  //       console.error("에러 발생: ", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <section className='contact-sec sec'>
      {/* {
        depthItem.map(item => {
          return (
            <div className="contact-list" key={item.id}>
              <a className="item">
                <div className="img-box">
                  <img src={`${userImgUrl}${item.EMAIL}`} alt='' />
                </div>
                <div className="txt-box">
                  <p className="name">{ item.NAME }</p>
                  <p className="info">
                    <span>{ item.DEPT_NAME }</span> /
                    <span>{ item.POS_NAME }</span>
                  </p>
                </div>
              </a>
            </div>
          )
        })
      } */}
    </section>
  )
}

export default ContactUi;