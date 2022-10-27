/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import Sperm1 from "../../images/sperm-1.png";
import Sperm2 from "../../images/sperm-2.png";
import Sperm3 from "../../images/sperm-3.png";
import Sperm4 from "../../images/sperm-4.png";
import Sperm5 from "../../images/sperm-5.png";

import "./Info.css";

function Info() {
  return (
    <section className="info">
      <h2 className="info__title">Текст <br /> сообщения</h2>
      <div className="info__container">
        <div className="info__bg" />
        <p className="info__text"><span className="info__text_bold">Lorem ipsum dolor sit amet</span>, consectetur adipiscing elit. Cras vel bibendum risus. Vestibulum dui nunc, hendrerit et est non, convallis rhoncus eros. Sed auctor, justo imperdiet rutrum dictum, libero ipsum ullamcorper augue, ac sodales ex nunc eu urna. Nam ornare, orci vel luctus maximus, velit nunc posuere justo, nec consectetur erat urna a nunc. In pulvinar aliquam dui non iaculis. Duis et ultricies nisi. Etiam nec lacus ut urna ullamcorper posuere id in est. Etiam ultricies ornare lectus non iaculis. Mauris pulvinar id libero eget commodo. Integer sit amet ligula gravida, interdum orci ut, aliquam nisl. Vestibulum ultrices tristique nisi, sit amet efficitur velit ullamcorper vel. Morbi aliquet nec nulla eget efficitur. Quisque tempor lacinia magna, in iaculis libero sagittis eu. Proin cursus posuere pulvinar. Sed ultrices libero eget nibh imperdiet, vel ullamcorper ipsum consectetur. Praesent posuere vulputate tincidunt. Cras vel bibendum risus. Vestibulum dui nunc, hendrerit et est non, convallis rhoncus eros. Sed auctor, justo imperdiet rutrum dictum, libero ipsum ullamcorper augue, ac sodales ex nunc eu urna. Nam ornare, orci vel luctus maximus, velit nunc posuere justo, nec consectetur erat urna a nunc. In pulvinar aliquam dui non iaculis. Duis et ultricies nisi. Etiam nec lacus ut urna ullamcorper posuere id in est. Etiam ultricies ornare lectus non iaculis. Mauris pulvinar id libero eget commodo. Integer sit amet ligula gravida, interdum orci ut, aliquam nisl. Vestibulum ultrices tristique nisi, sit amet efficitur velit ullamcorper vel. Morbi aliquet nec nulla eget efficitur. Quisque tempor lacinia magna, in iaculis libero sagittis eu. Proin cursus posuere pulvinar. Sed ultrices libero eget nibh imperdiet, vel ullamcorper ipsum consectetur. Praesent posuere vulputate tincidunt.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel bibendum risus. Vestibulum dui nunc, hendrerit et est non, convallis rhoncus eros. Sed auctor, justo imperdiet rutrum dictum, libero ipsum ullamcorper augue, ac sodales ex nunc eu urna. Nam ornare, orci vel luctus maximus, velit nunc posuere justo, nec consectetur erat urna a nunc. In pulvinar aliquam dui non iaculis. Duis et ultricies nisi. Etiam nec lacus ut urna ullamcorper posuere id in est. Etiam ultricies ornare lectus non iaculis. Mauris pulvinar id libero eget commodo. Integer sit amet ligula gravida, interdum orci ut, aliquam nisl. Vestibulum ultrices tristique nisi, sit amet efficitur velit ullamcorper vel. Morbi aliquet nec nulla eget efficitur. Quisque tempor lacinia magna, in iaculis libero sagittis eu. Proin cursus posuere pulvinar. Sed ultrices libero eget nibh imperdiet, vel ullamcorper ipsum consectetur. Praesent posuere vulputate tincidunt. Cras vel bibendum risus. Vestibulum dui nunc, hendrerit et est non, convallis rhoncus eros. Sed auctor, justo imperdiet rutrum dictum, libero ipsum ullamcorper augue, ac sodales ex nunc eu urna. Nam ornare, orci vel luctus maximus, velit nunc posuere justo, nec consectetur erat urna a nunc. In pulvinar aliquam dui non iaculis. Duis et ultricies nisi. Etiam nec lacus ut urna ullamcorper posuere id in est. Etiam ultricies ornare lectus non iaculis. Mauris pulvinar id libero eget commodo. Integer sit amet ligula gravida, interdum orci ut, aliquam nisl. Vestibulum ultrices tristique nisi, sit amet efficitur velit ullamcorper vel. Morbi aliquet nec nulla eget efficitur. Quisque tempor lacinia magna, in iaculis libero sagittis eu. Proin cursus posuere pulvinar. Sed ultrices libero eget nibh imperdiet, vel ullamcorper ipsum consectetur. Praesent posuere vulputate tincidunt.
        </p>
      </div>
      <img className="sperm_1" src={Sperm1} alt="sperm 1" />
      <img className="sperm_2" src={Sperm2} alt="sperm 2" />
      <img className="sperm_3" src={Sperm3} alt="sperm 3" />
      <img className="sperm_4" src={Sperm4} alt="sperm 4" />
      <img className="sperm_5" src={Sperm5} alt="sperm 5" />
    </section>
  );
}

export default Info;
