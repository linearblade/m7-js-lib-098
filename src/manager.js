
function install(sys, ctx){
    console.log('installing lib');
    console.log(sys,ctx);
}

function destroy(sys,ctx){
    console.warn('destroying');
}
export default {
    install , destroy
    
};
