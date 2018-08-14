#!/bin/bash

found=false
while IFS='' read -r line || [[ -n "$line" ]]; do
    if [[ $line = "[HQDA-IPN]" ]]; then
        found=true
    fi
    if [[ $line = "[Reporting server]" ]]; then
        found=true
    fi
    #if [[ $line = "[HQDA]" ]]; then
    #    found=true
    #fi

    if [[ "$found" = true ]] ; then
        if [[ $line = "disabled"* ]]; then
            line=$(echo $line | sed 's/1/0/')
            found=false
        fi
    fi
    echo $line
done < "/opt/splunk/etc/apps/Splunk_TA_nessus/local/tenable_sc_inputs.conf" > "/opt/splunk/etc/apps/Splunk_TA_nessus/local/tenable_sc_inputs_2.conf"
mv /opt/splunk/etc/apps/Splunk_TA_nessus/local/tenable_sc_inputs_2.conf /opt/splunk/etc/apps/Splunk_TA_nessus/local/tenable_sc_inputs.conf
chown splunk:splunk /opt/splunk/etc/apps/Splunk_TA_nessus/local/tenable_sc_inputs.conf
