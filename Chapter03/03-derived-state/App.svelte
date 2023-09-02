<script>
  import DateLabel from './DateLabel.svelte';

  let date = '2023-05-05'
  let locale = 'de-DE';
</script>

<div>
  <label>Date: <input bind:value={date} type="date" /></label>
  <label>Locale: <select bind:value={locale}>
    <option value="en-US">en-US</option>
    <option value="de-DE">de-DE</option>
    <option value="zh-CN">zh-CN</option>
    <option value="el-GR">el-GR</option>
  </select></label>
</div>

<DateLabel date={new Date(date)} {locale} />
