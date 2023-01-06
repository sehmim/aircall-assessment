import React from 'react';
import {
  BsFillTelephoneInboundFill,
  BsFillTelephoneOutboundFill,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';

function getMonthDateYear(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

function getTime(dateString) {
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
}

export function FeedCard({ item }) {
  const { createdAt, from, direction } = item;

  if (!createdAt || !from || !direction) {
    return null;
  }

  const renderDirectionIcon = (direction) => {
    if (direction === 'inbound') {
      return <BsFillTelephoneInboundFill />;
    } else if (direction === 'outbound') {
      return <BsFillTelephoneOutboundFill />;
    }
  };

  const DateLegend = () => {
    return (
      <div className="date-legend">
        <hr className="dotted-line"></hr>
        <span className="date-legend-text">{getMonthDateYear(createdAt)}</span>
        <hr className="dotted-line"></hr>
      </div>
    );
  };

  return (
    <div>
      <DateLegend />
      <div className="card-wrapper">
        <Link to={`/call/${item.id}`}>
          <div className="call-log-body">
            <span>{renderDirectionIcon(direction)}</span>
            <div>
              <span>{from}</span>
            </div>
            <span>{getTime(createdAt)}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
