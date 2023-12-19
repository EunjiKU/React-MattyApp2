import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { allUserApi, contactApi } from '../../api/index';

const ContactUi = () => {
  const userIdValue = useSelector(state => state.user.userId);
  const userImgUrl = useSelector(state => state.user.userImgUrl);
  const test = useSelector(state => state.user.accessToken);
  const [depthItem, setDepthItem] = useState([]);
  const [teamInfoItem, setTeamInfoItem] = useState([]);
  
  // useEffect(() => {
    

  //   allUserApi()
  //     .then((response) => {
  //       response.data.forEach(item => {
  //         if(item.EMAIL === userIdValue) {
  //           console.log(item.EMAIL);
  //         }
  //       });
  //     })
  //     .catch(err => console.log("연락처 에러!!!"))
  // }, [userIdValue, test]);


  useEffect(() => {

    const fetchData = async () => {
      try {
        const { data } = await allUserApi();
        data.forEach(item => {
          if(item.EMAIL === userIdValue) {
            console.log(`연락처 DEPT_CODE : ${item.DEPT_CODE}`);
            setDepthItem(item.DEPT_CODE);
          }
        })
      }
      catch(error) {
        console.log("내 정보 에러 : " + error);
        console.log(error);
      }
      console.log(depthItem);

      contactApi(depthItem)
        .then(({ data }) => {
          console.log(data);
          setTeamInfoItem(data);
        })
        .catch(error => {
          console.log("연락처 에러 : " + error);
          console.log(error);
        })

      // try {
      //   const allUserItem = await allUserApi();
      //   const myUserItem = allUserItem.data.find(item => item.EMAIL === userIdValue);

      //   if (myUserItem) {
      //     // setDepthNum(myUserItem.DEPT_CODE);
      //     const contactUserItem = await contactApi(myUserItem.DEPT_CODE);
      //     setDepthItem(contactUserItem.data);
      //   }
      // } catch (error) {
      //   console.error("에러 발생: ", error);
      // }
    };

    fetchData();
  }, [depthItem]);

  return (
    <section className='contact-sec sec'>
      {
        teamInfoItem.map(item => {
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
      }
    </section>
  )
}

export default ContactUi;