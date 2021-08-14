/**
Automatons, or Finite State Machines (FSM), are extremely useful to programmers when it comes to software design. You will be given a simplistic version of an FSM to code for a basic TCP session.

The outcome of this exercise will be to return the correct state of the TCP FSM based on the array of events given.

The input array of events will consist of one or more of the following strings:

APP_PASSIVE_OPEN, APP_ACTIVE_OPEN, APP_SEND, APP_CLOSE, APP_TIMEOUT, RCV_SYN, RCV_ACK, RCV_SYN_ACK, RCV_FIN, RCV_FIN_ACK
The states are as follows and should be returned in all capital letters as shown:

CLOSED, LISTEN, SYN_SENT, SYN_RCVD, ESTABLISHED, CLOSE_WAIT, LAST_ACK, FIN_WAIT_1, FIN_WAIT_2, CLOSING, TIME_WAIT
The input will be an array of events. Your job is to traverse the FSM as determined by the events, and return the proper state as a string, all caps, as shown above.

If an event is not applicable to the current state, your code will return "ERROR".

Action of each event upon each state:
(the format is INITIAL_STATE: EVENT -> NEW_STATE)

CLOSED: APP_PASSIVE_OPEN -> LISTEN
CLOSED: APP_ACTIVE_OPEN  -> SYN_SENT
LISTEN: RCV_SYN          -> SYN_RCVD
LISTEN: APP_SEND         -> SYN_SENT
LISTEN: APP_CLOSE        -> CLOSED
SYN_RCVD: APP_CLOSE      -> FIN_WAIT_1
SYN_RCVD: RCV_ACK        -> ESTABLISHED
SYN_SENT: RCV_SYN        -> SYN_RCVD
SYN_SENT: RCV_SYN_ACK    -> ESTABLISHED
SYN_SENT: APP_CLOSE      -> CLOSED
ESTABLISHED: APP_CLOSE   -> FIN_WAIT_1
ESTABLISHED: RCV_FIN     -> CLOSE_WAIT
FIN_WAIT_1: RCV_FIN      -> CLOSING
FIN_WAIT_1: RCV_FIN_ACK  -> TIME_WAIT
FIN_WAIT_1: RCV_ACK      -> FIN_WAIT_2
CLOSING: RCV_ACK         -> TIME_WAIT
FIN_WAIT_2: RCV_FIN      -> TIME_WAIT
TIME_WAIT: APP_TIMEOUT   -> CLOSED
CLOSE_WAIT: APP_CLOSE    -> LAST_ACK
LAST_ACK: RCV_ACK        -> CLOSED

@see https://www.codewars.com/kata/54acc128329e634e9a000362/
 */

const stateMachine = (state, event) => {
  switch (state) {
    case 'CLOSED':
      switch (event) {
        case 'APP_PASSIVE_OPEN':
          return 'LISTEN';
        case 'APP_ACTIVE_OPEN':
          return 'SYN_SENT';
        default:
          return 'ERROR';
      }
    case 'LISTEN':
      switch (event) {
        case 'RCV_SYN':
          return 'SYN_RCVD';
        case 'APP_SEND':
          return 'SYN_SENT';
        case 'APP_CLOSE':
          return 'CLOSED';
        default:
          return 'ERROR';
        }
    case 'SYN_RCVD':
      switch (event) {
        case 'APP_CLOSE':
          return 'FIN_WAIT_1';
        case 'RCV_ACK':
          return 'ESTABLISHED';
        default:
          return 'ERROR';
      }
    case 'SYN_SENT':
      switch (event) {
        case 'RCV_SYN':
          return 'SYN_RCVD';
        case 'RCV_SYN_ACK':
          return 'ESTABLISHED';
        case 'APP_CLOSE':
          return 'CLOSED';
        default:
          return 'ERROR';
      }
      case 'ESTABLISHED':
        switch (event) {
          case 'APP_CLOSE':
            return 'FIN_WAIT_1';
          case 'RCV_FIN':
            return 'CLOSE_WAIT';
          default:
            return 'ERROR';
        }
      case 'FIN_WAIT_1':
        switch (event) {
          case 'RCV_FIN':
            return 'CLOSING';
          case 'RCV_FIN_ACK':
            return 'TIME_WAIT';
          case 'RCV_ACK':
            return 'FIN_WAIT_2';
          default:
            return 'ERROR';
        }
      case 'CLOSING':
        switch (event) {
          case 'RCV_ACK':
            return 'TIME_WAIT';
          default:
            return 'ERROR';
        }
      case 'FIN_WAIT_2':
        switch (event) {
          case 'RCV_FIN':
            return 'TIME_WAIT';
          default:
            return 'ERROR';
        }
      case 'TIME_WAIT':
        switch (event) {
          case 'APP_TIMEOUT':
            return 'CLOSED';
          default:
            return 'ERROR';
        }
      case 'CLOSE_WAIT':
        switch (event) {
          case 'APP_CLOSE':
            return 'LAST_ACK';
          default:
            return 'ERROR';
        }
      case 'LAST_ACK':
        switch (event) {
          case 'RCV_ACK':
            return 'CLOSED';
          default:
            return 'ERROR';
        }
      default:
        return 'ERROR';
    }
}


const traverseTCPStates = eventList => {
  let state = "CLOSED";
  eventList.forEach(event => {
    state = stateMachine(state, event);
    if (state === "ERROR") return "ERROR";
  });
  return state;
}

export { traverseTCPStates };
