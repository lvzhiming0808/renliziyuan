/**
 * @desc ald custom event
 * @param eventName
 * @param eventParams
 */
export default function(eventName, eventParams = '') {
  this.$parent.$wxapp.aldstat.sendEvent(eventName, eventParams);
}
