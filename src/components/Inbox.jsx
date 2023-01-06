import React from 'react'
import { BsArchive } from 'react-icons/bs';
import { FeedCard } from './FeedCard';
import { useAppContext } from '../Provider';
import InfiniteScroll from 'react-infinite-scroll-component';
import useFetchData from '../hooks/fetchData';

export function Inbox() {

    const { data } = useAppContext();
    const ButtonArchiveAllCalls = () => {
        return (
            <div className='card-wrapper'>
                <a className='button-archive-calls'>
                    <BsArchive className='button-archive-calls-icon' />
                    <span className='button-archive-calls-text'>Archive all calls</span>
                </a>
            </div>
        )
    }

    return (
        <div>
            <ButtonArchiveAllCalls />
            <InfiniteScroll
              endMessage={
                <p style={{ textAlign: 'center' }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
                dataLength={data.length}
                next={useFetchData}
                hasMore={false}
                loader={<h4>Loading...</h4>}
                height={500}
                >
                    {
                        data && data.map((item, index)=> {
                            return (<FeedCard key={index} item={item} />)
                        })
                    }
            </InfiniteScroll>
        </div>
    )
}