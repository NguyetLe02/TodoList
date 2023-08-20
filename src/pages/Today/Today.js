import classNames from 'classnames/bind';
import { DownOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";


import styles from './Today.module.scss';
// import './library.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import TaskBar from '../../components/TaskBar/TaskBar';
import Detail from '../../components/DetailWork/DetailWork';
// import Comment from '../../components/Comment/Comment';
import Header from '../../components/Header/Header';

const cx = classNames.bind(styles);

let taskLists = [
    [],
    [],
    [],
]

function Today() {
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()
    const [Lists, setLists] = useState(taskLists)
    // const [width, setWidth] = useState((Lists[2].length / (Lists[0].length + Lists[1].length + Lists[2].length)) * 100 + '%')
    // const [filterType, setFilterType] = useState("All");
    const [isShowSideBar, setIsShowSideBar] = useState(true);
    const [listEvents, setListEvents] = useState([]);
    const [isOpenTaskdone, setIsOpenTaskdone] = useState(false);
    const [target, setTarget] = useState()

    function updateArrayObjects(listEvents, id, calendarId, changes) {
        return listEvents.map(obj => {
            if (obj.id === id && obj.calendarId === calendarId) {
                return { ...obj, ...changes }
            }
            return obj;
        });
    }

    const onChangeLists = (event, newprocess, coloumnId, userNumber) => {
        const temp = JSON.parse(JSON.stringify(Lists))
        const newLists = temp.reduce((result, currentValue, index) => {

            if (newprocess === "Ready" && index === 0) {
                return [...result, [...currentValue, { ...event, raw: { ...event.raw, status: newprocess } }]]
            }
            if (newprocess === "In Progress" && index === 1) {
                return [...result, [...currentValue, { ...event, raw: { ...event.raw, status: newprocess } }]]
            }
            if (newprocess === "Done" && index === 2)
                return [...result, [...currentValue, { ...event, raw: { ...event.raw, status: newprocess } }]]

            if (index === coloumnId) {
                const newArr = currentValue.reduce((res, element, index) => {
                    if (element.id === event.id)
                        return res;
                    return [...res, element];
                }, []);
                return [...result, newArr];
            }
            return [...result, currentValue]
        }, []);


        setLists(newLists);
        newLists.map((status) => {
            status.map((event) => {
                const Events = localStorage.getItem("listEvents")[0] ? JSON.parse(localStorage.getItem("listEvents")) : [];
                const eventsNew = updateArrayObjects(Events, event.id, event.calendarId, { raw: { ...event.raw, status: event.raw.status } })
                localStorage.setItem("listEvents", JSON.stringify(eventsNew));
            })
        })

    }

    // const filterEvent = () => {
    //     const targetArray = listEvents.filter((event) => {
    //         return Number(event.id) === Number(searchParams.get("eventId"))
    //     })
    //     setTarget(targetArray[0])
    //     const eventsOfTarget = listEvents.filter((event) => {
    //         return Number(event.raw.target) === Number(targetArray[0].id)
    //     })
    //     const listReady = eventsOfTarget.filter((event) => event.raw.status === "Ready")
    //     const listInprocess = eventsOfTarget.filter((event) => event.raw.status === "In Progress")
    //     const listDone = eventsOfTarget.filter((event) => event.raw.status === "Done")

    //     taskLists = [
    //         listReady,
    //         listInprocess,
    //         listDone
    //     ]
    //     setLists(taskLists)
    // }

    useEffect(() => {
        const Events = localStorage.getItem("listEvents")[0] ? JSON.parse(localStorage.getItem("listEvents")) : [];
        setListEvents(Events)
    }, [])

    // useEffect(() => {
    //     filterEvent()
    // }, [searchParams.get("eventId"), listEvents])


    return (
        <div className={cx('today')} >
            <Header></Header>

            <div className={cx('grid')} style={{ height: "100%" }}>
                <div className={cx('row')} style={{ height: "100%" }}>
                    <div className={cx(isShowSideBar ? 'col l-2-4' : 'col l-1')}>
                        <Sidebar
                            show={setIsShowSideBar}
                            setListEvents={setListEvents}
                            targetId={target?.id}
                            listEvents={listEvents}
                        ></Sidebar>
                    </div>
                    <div className={cx(isShowSideBar ? 'col l-10' : 'col l-11')} style={{ flex: 1 }}>
                        <div className={cx('content')}>
                            <div className={cx('content-header')}>
                                <div className={cx('header-title')}>NGÀY HÔM NAY</div>
                                {/* <HeaderOptions></HeaderOptions> */}
                            </div>

                            <div className={cx('content-body')}>
                                <div className={cx('grid')} style={{ height: "100%", display: 'flex', flexDirection: 'column' }}>
                                    <div className={cx('row no-gutters')} >
                                        <div className={cx('col l-12')}>
                                            {/* <div className={cx('process-bar')}>
                                                <div className={cx('left-bar')} onClick={() => navigate(`/WorkProgress?eventId=${searchParams.get("eventId")}`)}>
                                                    <div className={cx('left-bar-header')}>
                                                        Project statistics
                                                    </div>
                                                    <div className={cx('left-bar-body')}>
                                                        <div className={cx('left-bar-body_text')}>
                                                            <span className={cx('text-title')}>Completed :</span>
                                                            <span className={cx('text-content')}>{Lists[2].length + '/' + (Lists[0].length + Lists[1].length + Lists[2].length)}</span>
                                                        </div>
                                                        <div className={cx('left-bar-body_process')}>
                                                            <div className={cx('process-bar')}>
                                                                <div className={cx('process-value')} style={{ width: width }}></div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={cx('right-bar')}>
                                                    <div className={cx('right-bar-lists')}>
                                                        <div className={cx('right-bar-item')} >
                                                            <div className={cx('item-title')}>Total :</div>
                                                            <div className={cx('item-content')} style={{ 'border-left': "2px solid #0F75DC" }}>{(Lists[0].length + Lists[1].length + Lists[2].length)}</div>
                                                        </div>
                                                        <div className={cx('right-bar-item')} >
                                                            <div className={cx('item-title')}>Ready :</div>
                                                            <div className={cx('item-content')} style={{ 'border-left': "2px solid #FAAE83" }}>{Lists[0].length}</div>
                                                        </div>
                                                        <div className={cx('right-bar-item')} >
                                                            <div className={cx('item-title')}>In progress :</div>
                                                            <div className={cx('item-content')} style={{ 'border-left': "2px solid #FAAE83" }}>{Lists[1].length}</div>
                                                        </div>
                                                        <div className={cx('right-bar-item')} >
                                                            <div className={cx('item-title')}>Done :</div>
                                                            <div className={cx('item-content')} style={{ 'border-left': "2px solid #95E2A6" }}>{Lists[2].length}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>

                                    <div className={cx('row')} style={{ flex: 1 }}>
                                        <div className={cx('col l-11')} style={{ padding: 0 }}>
                                            <div className={cx('content-wrapper')}>
                                                <div className={cx('selection')}>
                                                
                                                <TaskBar
                                                    // event={value}
                                                    // setListEvents={setListEvents}
                                                ></TaskBar>
                                                <TaskBar></TaskBar>
                                                <TaskBar></TaskBar>
                                                    {/* <div className={cx('select-wrapper')}>
                                                        <div className={cx('content-title')}>Tasks</div>
                                                        <Select
                                                            defaultValue={filterType}
                                                            style={{ width: 200 }}
                                                            className={(filterType === "In Progress" ? "In-progress" : filterType) + " big"}
                                                            onChange={(value) => setFilterType(value)}
                                                            options={[
                                                                {
                                                                    options: [
                                                                        { label: 'All', value: 'All' },
                                                                        { label: 'Done', value: 'Done' },
                                                                        { label: 'In Progress', value: 'In Progress' },
                                                                        { label: 'Ready', value: 'Ready' },
                                                                    ],
                                                                },
                                                            ]}
                                                        />
                                                    </div> */}
                                                    {/* <div className={cx('task-list')}>
                                                        {(filterType === "In Progress" || filterType === "All") && Lists[1].map((value, index) => {
                                                            return <TaskBar
                                                                setLists={onChangeLists}
                                                                key={value.id}
                                                                event={value}
                                                                userNumber={2}
                                                                coloumnId={1}
                                                                setListEvents={setListEvents}
                                                            ></TaskBar>
                                                        })}
                                                        {(filterType === "Ready" || filterType === "All") && Lists[0].map((value, index) => {
                                                            return <TaskBar
                                                                setLists={onChangeLists}
                                                                key={value.id}
                                                                event={value}
                                                                userNumber={2}
                                                                coloumnId={0}
                                                                setListEvents={setListEvents}
                                                            ></TaskBar>

                                                        })}
                                                        {(filterType === "Done" || filterType === "All") && Lists[2].map((value, index) => {
                                                            return <TaskBar
                                                                setLists={onChangeLists}
                                                                key={value.id}
                                                                event={value}
                                                                userNumber={2}
                                                                coloumnId={2}
                                                                setListEvents={setListEvents}
                                                            ></TaskBar>

                                                        })}
                                                    </div> */}
                                                </div>

                                                <div className={cx('taskdone')} onClick={() => setIsOpenTaskdone(!isOpenTaskdone)}>
                                                    <div className={cx('taskdone-header')}>
                                                        <div className='taskdone-title'>
                                                            Đã hoàn thành
                                                        </div>
                                                        <div className='downlined'>
                                                            <span
                                                                    className={isOpenTaskdone ? cx("icon-downOut") : cx("icon-downUp")}
                                                                    onClick={() => setIsOpenTaskdone(!isOpenTaskdone)}
                                                                ><DownOutlined />
                                                            </span>
                                                        </div>
                                                    </div>
                                                        
                                                    <div className={cx('Taskdone-list')}>
                                                        {
                                                            isOpenTaskdone && 
                                                            // importainTarget?.map((e, index) => (
                                                            //     <div className={cx('important-item')} onClick={() => navigate(`/overview?eventId=${e.id}`)}>
                                                            //         <div className={cx('important-item-checkbox')} style={{ backgroundColor: colors[index % 4] }}></div>
                                                            //         <Tooltip title={e.title || e.eventName}>
                                                            //             <div className={cx('important-item-title')}>{e.title || e.eventName}</div>
                                                            //         </Tooltip>
                                                            //     </div>
                                                            // ))
                                                            <TaskBar></TaskBar>
                                                            
                                                        
                                                        }
                                                    </div>
                                                </div>

                                                {/* <div className={cx('description-wrapper')}>
                                                    <div className={cx('content-title')}>Description</div>
                                                    <div className={cx('description')}>
                                                        <div className={cx('wrapper')} dangerouslySetInnerHTML={{ __html: target?.raw?.description }}>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                        {/* <div className={cx('col l-5')}>
                                            <div className={cx('content-wrapper')}>
                                                <div className={cx('detail')}>
                                                    <div className={cx('content-title')}>Detail</div>
                                                    <Detail event={target}></Detail>
                                                </div>

                                                <div className={cx('comment')}>
                                                    <div className={cx('content-title')}>Comment</div>
                                                    <Comment></Comment>
                                                </div>
                                            </div>

                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Today;
