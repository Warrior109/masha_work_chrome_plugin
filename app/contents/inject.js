/**
 * injectScript - Inject internal script to available access to the `window`
 *
 * @param  {type} file_path Local path of the internal script.
 * @param  {type} tag The tag as string, where the script will be append (default: 'body').
 * @see    {@link http://stackoverflow.com/questions/20499994/access-window-variable-from-content-script}
 */
function injectScript(file_path, tag) {
    var node = document.getElementsByTagName(tag)[0];
    var script = document.createElement('script');
    script.setAttribute('type', 'module');
    script.setAttribute('src', file_path);
    script.setAttribute('id', "mashenka-chrome-extension");
    node.appendChild(script);
}
injectScript(chrome.extension.getURL('app/resources/allbiz/main.js'), 'head');


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "translate_all_languages") {
    window.postMessage({type: 'TRANSLATE_ON_ALL_LANGUAGES'});
  }
});
