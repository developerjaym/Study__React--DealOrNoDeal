class ClipboardCopier {
    copy(shareString, onSuccess = ()=>{}, onFailure = () => alert('Copy Failed.')) {
      shareString += "\nš https://localstorage.tools/dond/";
      if(navigator && navigator.clipboard.writeText(shareString)) {
        onSuccess();
      }
      else {
        onFailure();
      } 
    }
  }

const clipboardCopier = new ClipboardCopier()

export default clipboardCopier;