import * as React from 'react';
import cl from 'classnames';

import { Link } from '../../next-routes';
import { createLinker } from '../../utils/url-maker'
import { itemTarget } from '../../utils/menu'
import { LogoIcon } from '../../static/icons';
import { footerMenu, footerRightMenu, linksMenu } from '../../constants';

import style from './footer.css';


export class Footer extends React.Component {
  render() {
    const { lang } = this.props;
    console.log('footer lang', lang)
    const linkTo = createLinker(lang);
    return (
      <footer className={style.rockstatFooter}>
        <div className={style.top}>
          <div className={style.logo}>
            <LogoIcon />
            <span>Dmitry Rodin, 2021</span>
          </div>
          <div className={style.menu}>
            {
              footerMenu.map((item, index) => {
                return (
                  <div key={index} className={style.item} >
                    <Link route={linkTo(item.path)} >
                      <a className={cl(style.itemMain, { [style.notClick]: item.event !== undefined })} target={itemTarget(item)} > {item.name} </a>
                    </Link>

                    <div className={style.itemChildren}>

                      {
                        item.children !== undefined &&
                        item.children.map((child, key) => {
                          return (
                            <div key={key} className={style.children}>
                              <Link route={linkTo(child.path)} >
                                <a
                                  className={cl({ [style.notActive]: !child.active })}
                                  target={itemTarget(child)}
                                >{child.name}</a>
                              </Link>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className={style.menuRight}>
            {
              footerRightMenu.map((item, index) => {
                return (
                  <div key={index} className={style.item} >
                    <Link route={linkTo(item.path)} >
                      <a className={cl(style.itemMain, { [style.notActive]: !item.active })} target={itemTarget(item)} > {item.name} </a>
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className={style.socialMenu}>
          {
            linksMenu.map((item, index) => {
              return (
                <div key={index} className={cl(style.item, { [style.lastItem]: index === linksMenu.length - 1 })}>
                  <a href={item.path} target={itemTarget(item)}> {item.name} </a>
                </div>
              )
            })
          }
        </div>

        <div className={style.bottom}>
          <span>Cодержимое данного сайта доступно по лицензии Creative Commons Attribution 4.0</span>

          <span className={style.footerTextMobile}>Dmitry Rodin, 2021</span>

          <span>Конфиденциальность и персональные данные</span>
        </div>
      </footer>
    )
  }
}
