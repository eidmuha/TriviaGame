var mcqs = [{
    q1: "Which of the following is the capital of the Northern Territory?",
    a: "Sydney",
    b: "Canberra",
    c: "Darwin",
    d: "Perth",
    ans: function(){
        return Object.keys(mcqs[0])[3]
    }
},
{
    q2: "What do we celebrate on ANZAC Day?",
    a: "The landing of the first free settlers from Europe",
    b: "The landing of the First Fleet at Sydney Cove",
    c: "The landing of the first settlers from Asia at Gallipoli",
    d: "The landing of the New Zealand and Australian Army Corps at Gallipoli",
    ans: function(){
        return this.d;
    }
},]