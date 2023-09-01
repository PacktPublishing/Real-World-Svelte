<script>
  import { jsx } from 'react/jsx-runtime';
  import ReactDOM from 'react-dom';
  import Calendar from 'react-calendar';
  import 'react-calendar/dist/Calendar.css';

  let selectedDate;
  function calendar(element, date) {
    // TODO #1: render the react-calendar into the element
    const app = ReactDOM.createRoot(element);
    app.render(jsx(Calendar, { value: date, onChange }));
    // TODO #2: the onChange handler to dispatch a new custom event
    function onChange(value) {
      element.dispatchEvent(new CustomEvent('change', { detail: value }));
    }
    return {
      update(newDate) {
        // TODO #3: re-render the calendar again when there’s a new date value
        app.render(jsx(Calendar, { value: newDate, onChange }));
      },

      destroy() {
        // TODO #4: clean up
        app.unmount();
      },
    };
  }
</script>

<div>
  Selected date: {selectedDate}
</div>

<div
  use:calendar={selectedDate}
  on:change={(event) => (selectedDate = event.detail)}
/>
