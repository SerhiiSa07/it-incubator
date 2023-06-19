/*
Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.*/


logicalCalc = (array, op) => !!array.reduce( (prev, cur) => op == 'AND' ? prev && cur : op == 'OR' ? prev || cur : prev ^ cur)