import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { allUserApi, contactApi } from '../../api/index';

const ContactUi = () => {
  const userIdValue = useSelector(state => state.user.userId);
  const userImgUrl = useSelector(state => state.user.userImgUrl);
  const [teamInfoItem, setTeamInfoItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allUserPro = await allUserApi();
        const allUserValue = allUserPro.data;
        const myInfoItem = allUserValue.find(item => item.EMAIL === userIdValue);

        if(myInfoItem) {
          const contactPro = await contactApi(myInfoItem.DEPT_CODE);
          setTeamInfoItem(contactPro.data);

          console.log("연락처 최종 성공!!!")
        } else {
          console.log("연락처 중간 에러!!!")
        }
      } catch (err) {
        console.log("연락처 에러!!!");
      }
    }

    fetchData();
  }, [userIdValue]);

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