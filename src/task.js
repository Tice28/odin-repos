export default function createTask(title, desc, dateEnd, prio){
    //Initial version of task. Needs to be fixed to allow for editing, and a hash identifier in place of index.
    return {
        title: title,
        desc: desc,
        dateStart: Date.now(),
        dateEnd: dateEnd,
        prio: prio,
        index: localStorage.length
    }
}

