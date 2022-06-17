(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{OYlG:function(W,K,e){"use strict";e.r(K);var L=e("k1fw"),Oe=e("q1tI"),G=e("RGYn"),S=e("9og8"),Q=e("WmNS"),y=e.n(Q),C=e("rlch"),B=`import FormRender, { useForm } from 'form-render';
import React from 'react';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,E=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,$=`import FormRender, { useForm } from 'form-render';
import React from 'react';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,V=`export const basic = {
  labelWidth: 130,
  type: 'object',
  properties: {
    url: {
      title: 'url\u8F93\u5165\u6846',
      placeholder: '//www.taobao.com',
      type: 'string',
      format: 'url',
      required: true,
    },
    email: {
      title: 'email\u8F93\u5165\u6846',
      type: 'string',
      format: 'email',
    },
    string: {
      title: '\u6B63\u5219\u6821\u9A8C\u5B57\u7B26\u4E32',
      description: 'a-z',
      type: 'string',
      hidden: false,
      disabled: true,
    },
  },
};

export const expression = {
  type: 'object',
  properties: {
    input: {
      title: '{{formData.config.title || "\u8F93\u5165\u6846"}}',
      type: 'string',
      placeholder: '{{formData.config.placeholder}}',
      props: {
        size: '{{formData.config.size}}',
      },
      hidden: '{{formData.config.hidden === true}}',
      readOnly: '{{formData.config.readOnly === true}}',
      disabled: '{{formData.config.disabled === true}}',
    },
    rate: {
      title: 'rate',
      type: 'number',
      widget: 'rate',
    },
    config: {
      title: '\u914D\u7F6E',
      type: 'object',
      properties: {
        title: {
          title: 'title',
          type: 'string',
        },
        placeholder: {
          title: 'placeholder',
          type: 'string',
        },
        size: {
          title: 'input\u5927\u5C0F',
          type: 'string',
          enum: ['large', 'middle', 'small'],
          enumNames: ['\u5927', '\u4E2D', '\u5C0F'],
          widget: 'radio',
        },
        hidden: {
          title: '\u662F\u5426\u9690\u85CF',
          type: 'boolean',
        },
        readOnly: {
          title: '\u662F\u5426\u53EA\u8BFB',
          type: 'boolean',
        },
        disabled: {
          title: '\u662F\u5426\u7F6E\u7070',
          type: 'boolean',
        },
      },
    },
  },
  required: [],
};

export const titleTrick = {
  displayType: 'row',
  type: 'object',
  properties: {
    inputName1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      width: '50%',
    },
    desc: {
      type: 'html',
      bind: false,
      default: "\u8865\u5145\u8BF4\u660E <span style='color:red'>hello<span>",
      width: '50%',
    },
  },
};`,X=`import { Button, Input, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import React from 'react';

const { TextArea } = Input;

const Demo = () => {
  const form = useForm();

  const schema = {
    type: 'object',
    displayType: 'row',
    properties: {
      select1: {
        title: '\u8F93\u5165\u6846',
        type: 'string',
        dependencies: ['useSelect'],
        widget: 'MyTextEditor',
        width: '60%',
      },
      useSelect: {
        title: '\u8F93\u5165\u6846\u9AD8\u5EA6',
        type: 'number',
        width: '60%',
      },
    },
  };

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      message.success('\u63D0\u4EA4\u6210\u529F\uFF1A' + JSON.stringify(data));
    }
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        widgets={{ MyTextEditor }}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

const MyTextEditor = props => {
  const { addons } = props;
  console.log(addons.dependValues);
  let rows;
  if (addons && addons.dependValues) {
    rows = addons.dependValues[0] || 2;
  }
  return <TextArea rows={rows} />;
};

export default Demo;`,H=`import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';
import React from 'react';

const Demo = () => {
  const form = useForm();

  const schema = {
    displayType: 'column',
    type: 'object',
    properties: {
      listName: {
        title: '\u5BF9\u8C61\u6570\u7EC4',
        description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
        type: 'array',
        default: [
          { select1: false, input1: 'hello world' },
          { select1: true },
          { select1: false },
        ],
        items: {
          type: 'object',
          properties: {
            select1: {
              title: '\u9690\u85CF\u8F93\u5165\u6846',
              type: 'boolean',
            },
            input1: {
              title: '\u8F93\u5165\u6846',
              type: 'string',
              required: true,
              hidden: '{{rootValue.select1 === true}}',
            },
          },
        },
      },
    },
  };

  const onFinish = (data, errors) => {
    console.log(data, errors);
  };

  return (
    <div>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`,Y=`import { Button, Checkbox } from 'antd';
import FormRender, { useForm } from 'form-render';
import React from 'react';

const MyCheckbox = ({ addons }) => {
  const { dependValues, setValueByPath } = addons;
  console.log(dependValues);
  const checked = dependValues[0] && dependValues[0].length === 4;
  const onChange = e => {
    const val = e.target.checked;
    console.log(val);
    if (val === false) {
      setValueByPath('boxes', []);
    } else if (val === true) {
      setValueByPath('boxes', [1, 2, 3, 4]);
    }
  };
  return <Checkbox checked={checked} onChange={onChange} />;
};

const Demo = () => {
  const form = useForm();

  const schema = {
    type: 'object',
    properties: {
      select1: {
        title: '\u662F\u5426\u5168\u9009',
        type: 'boolean',
        dependencies: ['boxes'],
        widget: 'MyCheckbox',
      },
      boxes: {
        title: '\u53EF\u7528\u64CD\u4F5C',
        description: '\u591A\u9009',
        type: 'array',
        items: {
          type: 'number',
        },
        enum: [1, 2, 3, 4],
        enumNames: ['\u589E', '\u5220', '\u6539', '\u67E5'],
        widget: 'checkboxes',
      },
    },
  };

  const onFinish = (data, errors) => {
    console.log(data, errors);
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        onFinish={onFinish}
        widgets={{ MyCheckbox }}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`,U=`import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';
import React from 'react';

const Demo = () => {
  const form = useForm();

  const schema = {
    displayType: 'column',
    type: 'object',
    properties: {
      x: {
        title: '\u5BF9\u8C61\u6570\u7EC4',
        type: 'array',
        items: {
          type: 'object',
          properties: {
            a: {
              title: '\u8F93\u5165\u6846',
              type: 'string',
            },
            y: {
              title: '\u5BF9\u8C61',
              type: 'object',
              properties: {
                z: {
                  title: '\u9009\u62E9\u6846',
                  type: 'string',
                  widget: 'radio',
                  enum: [],
                },
              },
            },
          },
        },
      },
    },
  };

  const onMount = () => {
    form.setSchemaByPath('x[].y.z', { enum: [1, 2, 3] });
  };

  const onFinish = (data, errors) => {
    console.log(data, errors);
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        onFinish={onFinish}
        onMount={onMount}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`,Z=`import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';
import React from 'react';

const Demo = () => {
  const form = useForm();

  const schema = {
    displayType: 'column',
    type: 'object',
    properties: {
      province: {
        type: 'string',
        placeholder: 'province',
        required: 'true',
        rules: [
          { required: true, message: "province can't be empty" },
          { pattern: '^[a-z]+$', message: 'incorrect province' },
        ],
        width: '20%',
      },
      city: {
        type: 'string',
        placeholder: 'city',
        required: 'true',
        rules: [
          { required: true, message: "city can't be empty" },
          { pattern: '^[a-z]+$', message: 'incorrect city' },
        ],
        width: '20%',
      },
    },
  };

  const onFinish = (data, errors) => {
    console.log(data, errors);
  };

  return (
    <div>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`,q=`import { Button, Input, Modal } from 'antd';
import Generator from 'fr-generator';
import React, { useRef, useState } from 'react';
const { TextArea } = Input;

const defaultValue = {
  type: 'object',
  properties: {
    inputName: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
    },
  },
};

const templates = [
  {
    text: '\u6A21\u677F1',
    name: 'something',
    schema: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        inputName: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
        },
        selectName: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        },
        dateName: {
          title: '\u65F6\u95F4\u9009\u62E9',
          type: 'string',
          format: 'date',
        },
      },
    },
  },
];

const Demo = () => {
  const [show, setShow] = useState(false);
  const [schema, setSchema] = useState(() => defaultValue);
  const genRef = useRef(); // class\u7EC4\u4EF6\u7528 React.createRef()

  const toggle = () => setShow(o => !o);

  const handleOk = () => {
    const value = genRef.current && genRef.current.getValue();
    setSchema(value);
    toggle();
  };

  return (
    <div>
      <Button type="primary" onClick={toggle} style={{ marginBottom: 12 }}>
        \u914D\u7F6Eschema
      </Button>
      <Modal
        visible={show}
        onCancel={toggle}
        onOk={handleOk}
        okText="\u4FDD\u5B58"
        cancelText="\u5173\u95ED"
        width="90%"
        bodyStyle={{ height: '70vh' }}
      >
        <Generator ref={genRef} defaultValue={schema} templates={templates} />
      </Modal>
      <TextArea
        autoSize
        value={JSON.stringify(schema, null, 2)}
        onChange={() => {}}
      />
    </div>
  );
};

export default Demo;`,x=`import Generator, {
  defaultCommonSettings,
  defaultGlobalSettings,
  defaultSettings,
} from 'fr-generator';
import React from 'react';

const NewWidget = ({ value = 0, onChange }) => (
  <button onClick={() => onChange(value + 1)}>{value}</button>
);

const Demo = () => {
  console.log(defaultSettings, defaultCommonSettings, defaultGlobalSettings);

  return (
    <div style={{ height: '50vh' }}>
      <Generator
        widgets={{ NewWidget }}
        settings={[
          {
            title: '\u4E2A\u4EBA\u4FE1\u606F',
            widgets: [
              {
                text: '\u8BA1\u6570\u5668',
                name: 'asyncSelect',
                schema: {
                  title: '\u8BA1\u6570\u5668',
                  type: 'number',
                  widget: 'NewWidget',
                },
                setting: {
                  api: { title: 'api', type: 'string' },
                },
              },
              {
                text: '\u59D3\u540D',
                name: 'name',
                schema: {
                  title: '\u8F93\u5165\u6846',
                  type: 'string',
                },
                setting: {
                  maxLength: { title: '\u6700\u957F\u5B57\u6570', type: 'number' },
                },
              },
              {
                text: 'object',
                name: 'object',
                schema: {
                  title: '\u5BF9\u8C61',
                  type: 'object',
                  properties: {},
                },
                setting: {},
              },
              {
                text: 'array',
                name: 'array',
                schema: {
                  title: '\u6570\u7EC4',
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {},
                  },
                },
                setting: {},
              },
            ],
          },
        ]}
        commonSettings={{
          description: {
            title: '\u81EA\u5B9A\u4E49\u5171\u901A\u7528\u7684\u5165\u53C2',
            type: 'string',
          },
        }}
      />
    </div>
  );
};

export default Demo;`,k=`import Generator from 'fr-generator';
import React from 'react';
import './index.less';

const { Provider, Sidebar, Canvas, Settings } = Generator;

const Demo = () => {
  return (
    <div className="fr-generator-playground" style={{ height: '40vh' }}>
      <Provider
        onChange={data => console.log('data:change', data)}
        onSchemaChange={schema => console.log('schema:change', schema)}
      >
        <div className="fr-generator-container">
          <Settings />
          <Canvas />
          <Sidebar fixedName />
        </div>
      </Provider>
    </div>
  );
};

export default Demo;`,J=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,_=`import { Button, Input, Modal } from 'antd';
import Generator from 'fr-generator';
import React, { useRef, useState } from 'react';
const { TextArea } = Input;

const defaultValue = {
  type: 'object',
  properties: {
    array: {
      key: 'array',
      type: 'array',
      name: 'array',
      title: 'Name',
      'x-component': 'arraytable',
      items: {
        type: 'object',
        properties: {
          aa: {
            key: 'aa',
            type: 'string',
            name: 'aa',
            title: '\u63A7\u5236\u76F8\u90BB\u5B57\u6BB5\u663E\u793A\u9690\u85CF',
            enum: [
              {
                label: '\u663E\u793A',
                value: true,
              },
              {
                label: '\u9690\u85CF',
                value: false,
              },
            ],
            'x-component': 'input',
          },
          bb: {
            key: 'bb',
            type: 'string',
            name: 'bb',
            title: 'BB',
            'x-component': 'input',
          },
        },
      },
    },
    cc: {
      key: 'cc',
      type: 'string',
      name: 'cc',
      title: 'CC',
      'x-component': 'input',
      'x-component-props': { min: 1 },
    },
  },
};

const stringContains = (str, text) => {
  return str.indexOf(text) > -1;
};

const isObject = a =>
  stringContains(Object.prototype.toString.call(a), 'Object');

// \u83B7\u5F97 propsSchema \u7684 children
const getChildren2 = schema => {
  if (!schema) return [];
  const {
    // object
    properties,
    // array
    items,
    type,
  } = schema;
  if (!properties && !items) {
    return [];
  }
  let schemaSubs = {};
  if (type === 'object') {
    schemaSubs = properties;
  }
  if (type === 'array') {
    schemaSubs = items.properties;
  }
  return Object.keys(schemaSubs).map(name => ({
    schema: schemaSubs[name],
    name,
  }));
};

// formily Schema => FRG schema
const transformFrom = (mySchema, parent = null) => {
  const isObj = mySchema.type === 'object' && mySchema.properties;
  const isList =
    mySchema.type === 'array' && mySchema.items && mySchema.items.properties;
  const hasChildren = isObj || isList;
  // debugger;
  if (!hasChildren) {
    if (mySchema.enum && Array.isArray(mySchema.enum)) {
      const list = mySchema.enum;
      if (
        isObject(list[0]) &&
        list[0].label !== undefined &&
        list[0].value !== undefined
      ) {
        const _enumNames = list.map(i => i.label);
        const _enum = list.map(i => i.value);
        mySchema.enum = _enum;
        mySchema.enumNames = _enumNames;
      }
    }
  } else {
    const childrenList = getChildren2(mySchema);
    childrenList.map(item => {
      if (isObj) {
        mySchema.properties[item.name] = transformFrom(item.schema, mySchema);
      }
      if (isList) {
        mySchema.items.properties[item.name] = transformFrom(
          item.schema,
          mySchema
        );
      }
    });
  }
  if (mySchema['x-component']) {
    mySchema['widget'] = mySchema['x-component'];
  }
  if (mySchema['x-component-props']) {
    mySchema['props'] = mySchema['x-component-props'];
  }
  if (parent && mySchema.required) {
    if (parent.required && Array.isArray(parent.required)) {
      parent.required.push(mySchema.name);
    } else {
      parent.required = [mySchema.name];
    }
  }
  delete mySchema.key;
  delete mySchema.name;
  delete mySchema.required;
  delete mySchema['x-component'];
  delete mySchema['x-component-props'];
  return mySchema;
};

// FRG schema => formily Schema
const transformTo = (frSchema, parent = null, key = null) => {
  const isObj = frSchema.type === 'object' && frSchema.properties;
  const isList =
    frSchema.type === 'array' && frSchema.items && frSchema.items.properties;
  const hasChildren = isObj || isList;
  // debugger;
  if (!hasChildren) {
    if (
      frSchema.enum &&
      Array.isArray(frSchema.enum) &&
      frSchema.enumNames &&
      Array.isArray(frSchema.enumNames)
    ) {
      const list = frSchema.enum.map((item, idx) => ({
        value: item,
        label: frSchema.enumNames[idx],
      }));
      frSchema.enum = list;
    }
  } else {
    const childrenList = getChildren2(frSchema);
    childrenList.map(item => {
      if (isObj) {
        frSchema.properties[item.name] = transformTo(
          item.schema,
          frSchema,
          item.name
        );
      }
      if (isList) {
        frSchema.items.properties[item.name] = transformTo(
          item.schema,
          frSchema,
          item.name
        );
      }
    });
  }
  if (frSchema['widget']) {
    frSchema['x-component'] = frSchema['widget'];
  }
  if (frSchema['props']) {
    frSchema['x-component-props'] = frSchema['props'];
  }
  delete frSchema['widget'];
  delete frSchema['props'];
  delete frSchema['enumNames'];
  if (key) {
    frSchema.name = key;
    frSchema.key = key;
  }
  if (parent && key && parent.required && Array.isArray(parent.required)) {
    if (parent.required.indexOf(key) > -1) {
      frSchema.required = true;
    }
  }
  return frSchema;
};

const fromFormily = schema => transformFrom(schema);
const toFormily = schema => transformTo(schema);

const Demo = () => {
  const [show, setShow] = useState(false);
  const [schema, setSchema] = useState(() => defaultValue);
  const genRef = useRef(); // class\u7EC4\u4EF6\u7528 React.createRef()

  const toggle = () => setShow(o => !o);

  const handleOk = () => {
    const value = genRef.current && genRef.current.getValue();
    setSchema(value);
    toggle();
  };

  return (
    <div>
      <Button type="primary" onClick={toggle} style={{ marginBottom: 12 }}>
        \u914D\u7F6Eschema
      </Button>
      <Modal
        visible={show}
        onCancel={toggle}
        onOk={handleOk}
        okText="\u4FDD\u5B58"
        cancelText="\u5173\u95ED"
        width="90%"
        bodyStyle={{ height: '70vh' }}
      >
        <Generator
          ref={genRef}
          defaultValue={schema}
          transformer={{
            from: fromFormily,
            to: toFormily,
          }}
        />
      </Modal>
      <TextArea
        autoSize
        value={JSON.stringify(schema, null, 2)}
        onChange={() => {}}
      />
    </div>
  );
};

export default Demo;`,ee=`import Generator from 'fr-generator';
import React, { useEffect, useRef } from 'react';
import './index.less';

const Demo = () => {
  const ref = useRef();

  useEffect(() => {
    window.onbeforeunload = function (e) {
      e = e || window.event;
      // \u517C\u5BB9IE8\u548CFirefox 4\u4E4B\u524D\u7684\u7248\u672C
      if (e) {
        e.returnValue = '\u5173\u95ED\u63D0\u793A';
      }
      // Chrome, Safari, Firefox 4+, Opera 12+ , IE 9+
      return '\u5173\u95ED\u63D0\u793A';
    };
  }, []);

  const goToFrPlayground = () => {
    ref.current.copyValue();
    window.open('/playground');
  };

  return (
    <div className="fr-generator-playground" style={{ height: '80vh' }}>
      <Generator
        ref={ref}
        extraButtons={[{ text: '\u53BBplayground\u9A8C\u8BC1', onClick: goToFrPlayground }]}
        onChange={data => console.log('data:change', data)}
        onSchemaChange={schema => console.log('schema:change', schema)}
      />
    </div>
  );
};

export default Demo;`,ne=`import { Radio, Select, Slider, Switch } from 'antd';
import React, { Component } from 'react';
import './index.css';
// import GithubCorner from 'react-github-corner';
import Demo from './main';

const Option = Select.Option;
class Root extends Component {
  state = {
    schemaName: 'simplest',
    column: 1,
    displayType: 'column',
    readOnly: false,
    labelWidth: 110,
  };

  onColumnNumberChange = value => {
    this.setState({ column: value });
  };

  onDisplayChange = value => {
    this.setState({
      displayType: value,
      showDescIcon: value === 'row',
    });
  };

  onReadOnlyChange = value => this.setState({ readOnly: value });

  onSchemaChange = e => {
    this.setState({ schemaName: e.target.value });
  };

  onLabelWidthChange = value => {
    this.setState({ labelWidth: value });
  };

  render() {
    const { showDescIcon, readOnly, labelWidth } = this.state;
    return (
      <div className="fr-playground">
        {/* <GithubCorner
          href="https://github.com/alibaba/form-render"
          bannerColor="#F6C14F"
          className="absolute top-0 right-0 z-999"
        /> */}
        {/* <a href="/" className="f6 absolute top-1 right-1 z-999">
          \u56DE\u4E3B\u9875
        </a> */}
        <div className="w-100 flex setting-container">
          <Radio.Group
            name="schemaName"
            defaultValue="simplest"
            className="w-50 flex items-center flex-wrap z-999"
            onChange={this.onSchemaChange}
          >
            <Radio value="simplest">\u6700\u7B80\u6837\u4F8B</Radio>
            <Radio value="basic">\u57FA\u7840\u63A7\u4EF6</Radio>
            <Radio value="format">\u6821\u9A8C</Radio>
            <Radio value="new-feature">\u65B0\u529F\u80FD</Radio>
            <Radio value="function">\u590D\u6742\u8054\u52A8</Radio>
            <Radio value="input">\u4E2A\u6027\u8F93\u5165\u6846</Radio>
            <Radio value="select">\u4E2A\u6027\u9009\u62E9\u6846</Radio>
            <Radio value="demo">\u5B8C\u6574\u4F8B\u5B50</Radio>
          </Radio.Group>
          <div className="w-50 flex items-center flex-wrap z-999">
            <Select
              style={{ marginRight: 8, marginLeft: 24 }}
              onChange={this.onColumnNumberChange}
              defaultValue="1"
            >
              <Option value="1">\u4E00\u884C\u4E00\u5217</Option>
              <Option value="2">\u4E00\u884C\u4E8C\u5217</Option>
              <Option value="3">\u4E00\u884C\u4E09\u5217</Option>
            </Select>
            <Select
              style={{ marginRight: 8 }}
              onChange={this.onDisplayChange}
              defaultValue="column"
            >
              <Option value="column">\u4E0A\u4E0B\u6392\u5217</Option>
              <Option value="row">\u5DE6\u53F3\u6392\u5217</Option>
            </Select>
            <Switch
              style={{ marginRight: 8 }}
              checkedChildren="\u7F16\u8F91"
              onChange={this.onReadOnlyChange}
              unCheckedChildren="\u53EA\u8BFB"
              checked={readOnly}
            />
            <div style={{ width: 70 }}>\u6807\u7B7E\u5BBD\u5EA6\uFF1A</div>
            <Slider
              style={{ width: 80 }}
              max={200}
              min={20}
              value={labelWidth}
              onChange={this.onLabelWidthChange}
            />
          </div>
        </div>
        <Demo {...this.state} />
      </div>
    );
  }
}

export default Root;`,te=`.debug * {
  outline: 1px solid gold;
}

.markdown p {
  color: #454d64 !important;
  font-size: 15px !important;
  line-height: 1.60625 !important;
}

.markdown ol,
.markdown ul {
  list-style: initial !important;
}

.hidden {
  display: none;
}

.npm__react-simple-code-editor__textarea {
  outline: none;
}

.b {
  font-weight: bold;
}

.pa0 {
  padding: 0;
}
.pa1 {
  padding: 0.25rem;
}
.pa2 {
  padding: 0.5rem;
}
.pa3 {
  padding: 1rem;
}
.pa4 {
  padding: 2rem;
}
.pa5 {
  padding: 4rem;
}
.pl0 {
  padding-left: 0;
}
.pt1 {
  padding-top: 0.25rem;
}
.pt2 {
  padding-top: 0.5rem;
}
.pt3 {
  padding-top: 1rem;
}
.pt4 {
  padding-top: 2rem;
}
.pt5 {
  padding-top: 4rem;
}
.pl2 {
  padding-left: 0.5rem;
}
.pb2 {
  padding-bottom: 0.5rem;
}
.overflow-auto {
  overflow: auto;
}
.h-100 {
  height: 100%;
}
.vh-100 {
  height: 100vh;
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.top-0 {
  top: 0;
}
.right-0 {
  right: 0;
}
.w-50 {
  width: 50%;
}
.w-100 {
  width: 100%;
}
.flex {
  display: flex;
}
.flex-auto {
  flex: 1 1 auto;
  min-width: 0; /* 1 */
  min-height: 0; /* 1 */
}
.flex-column {
  flex-direction: column;
}
.items-center {
  align-items: center;
}
.flex-wrap {
  flex-wrap: wrap;
}
.z-999 {
  z-index: 999;
}

.fr-playground {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;
  height: 100vh;
}

.fr-playground .setting-container {
  border-bottom: 1px solid #ccc;
  padding: 0 12px 12px;
}

.__dumi-default-previewer-demo {
  padding: 24px;
}`,re=`import { Tabs } from 'antd';
import FormRender, { useForm } from 'form-render';
import parseJson from 'json-parse-better-errors';
import React, { useEffect, useState } from 'react';
import AsyncSelect from './customized/AsyncSelect';
import DefaultSchema from './json/simplest.json';
import CodeBlock from './monaco';
const { TabPane } = Tabs;

// help functions
const schema2str = obj => JSON.stringify(obj, null, 2) || '';

const Demo = ({ schemaName, theme, ...formProps }) => {
  const [schemaStr, set1] = useState(() => schema2str(DefaultSchema.schema));
  const [error, set2] = useState('');

  useEffect(() => {
    const schema = require(\`./json/\${schemaName}.json\`);
    set1(schema2str(schema.schema));
  }, [schemaName]);

  const tryParse = schemaStr => {
    let schema = {};
    try {
      schema = parseJson(schemaStr);
      if (typeof schema !== 'object') {
        set2('schema\u975E\u6B63\u786Ejson');
        return;
      }
      set2('');
      return schema;
    } catch (error) {
      set2(String(error));
    }
  };

  const handleCodeChange = schemaStr => {
    set1(schemaStr);
    tryParse(schemaStr);
  };

  let schema = {};
  try {
    schema = parseJson(schemaStr);
  } catch (error) {
    console.log(error);
  }

  const form = useForm();

  return (
    <div className="flex-auto flex">
      <div className="w-50 h-100 pl2 flex flex-column">
        <Tabs
          defaultActiveKey="1"
          onChange={() => {}}
          className="flex flex-column"
          style={{ overflow: 'auto' }}
        >
          <TabPane tab="Schema" key="1">
            <CodeBlock value={schemaStr} onChange={handleCodeChange} />
          </TabPane>
          <TabPane tab="Data" key="2">
            <CodeBlock value={schema2str(form.getValues())} readOnly />
          </TabPane>
        </Tabs>
      </div>
      <div className="w-50 h-100 flex flex-column pa2">
        <div
          className="h-100 overflow-auto pa3 pt4 flex-auto"
          style={{ borderLeft: '1px solid #ddd' }}
        >
          {error ? (
            <div>{error}</div>
          ) : (
            <FormRender
              form={form}
              schema={schema}
              {...formProps}
              widgets={{ asyncSelect: AsyncSelect }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Demo;`,ae=`import React from 'react';
import { Select } from 'antd';
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';
const { Option } = Select;

let timeout;
let currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    const str = querystring.encode({
      code: 'utf-8',
      q: value,
    });
    jsonp(\`https://suggest.taobao.com/sug?\${str}\`)
      .then(response => response.json())
      .then(d => {
        if (currentValue === value) {
          const { result } = d;
          const data = [];
          result.forEach(r => {
            data.push({
              value: r[0],
              text: r[0],
            });
          });
          callback(data);
        }
      });
  }

  timeout = setTimeout(fake, 300);
}

class SearchInput extends React.Component {
  state = {
    data: [],
  };

  handleSearch = value => {
    if (value) {
      fetch(value, data => this.setState({ data }));
    } else {
      this.setState({ data: [] });
    }
  };

  handleChange = value => {
    const { onChange } = this.props;
    onChange(value);
  };

  render() {
    const { value, ...rest } = this.props;
    const options = this.state.data.map(d => (
      <Option key={d.value}>{d.text}</Option>
    ));
    return (
      <Select
        {...rest}
        style={{ width: '100%' }}
        showSearch
        value={value || undefined}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        notFoundContent={null}
      >
        {options}
      </Select>
    );
  }
}

export default SearchInput;`,se=`{
  "schema": {
    "type": "object",
    "properties": {
      "input": {
        "title": "\u7B80\u5355\u8F93\u5165\u6846",
        "type": "string",
        "min": 6,
        "rules": [
          {
            "pattern": "^[A-Za-z0-9]+$",
            "message": "\u53EA\u5141\u8BB8\u586B\u5199\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"
          }
        ]
      },
      "select": {
        "title": "\u5355\u9009",
        "type": "string",
        "enum": ["a", "b", "c"],
        "enumNames": ["\u9009\u98791", "\u9009\u98792", "\u9009\u98793"],
        "widget": "radio"
      },
      "listName2": {
        "title": "\u5BF9\u8C61\u6570\u7EC4",
        "description": "\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",
        "type": "array",
        "min": 1,
        "max": 3,
        "items": {
          "type": "object",
          "properties": {
            "input1": {
              "title": "\u7B80\u5355\u8F93\u5165\u6846",
              "type": "string"
            },
            "select1": {
              "title": "\u5355\u9009",
              "type": "string",
              "enum": ["a", "b", "c"],
              "enumNames": ["\u65E9", "\u4E2D", "\u665A"]
            }
          }
        }
      }
    }
  }
}`,ie=`import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

import './theme.css';

const Demo = ({ value, onChange }) => {
  return (
    <Editor
      value={value}
      onValueChange={onChange}
      highlight={code => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 16,
      }}
    />
  );
};

export default Demo;`,oe=`/* PrismJS 1.16.0
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+graphql+jsx+regex */
/**
 * prism.js default theme for JavaScript, CSS and HTML
 * Based on dabblet (http://dabblet.com)
 * @author Lea Verou
 */

code[class*='language-'],
pre[class*='language-'] {
  color: black;
  background: none;
  text-shadow: 0 1px white;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 1em;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

pre[class*='language-']::-moz-selection,
pre[class*='language-'] ::-moz-selection,
code[class*='language-']::-moz-selection,
code[class*='language-'] ::-moz-selection {
  text-shadow: none;
  background: #b3d4fc;
}

pre[class*='language-']::selection,
pre[class*='language-'] ::selection,
code[class*='language-']::selection,
code[class*='language-'] ::selection {
  text-shadow: none;
  background: #b3d4fc;
}

@media print {
  code[class*='language-'],
  pre[class*='language-'] {
    text-shadow: none;
  }
}

/* Code blocks */
pre[class*='language-'] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
}

:not(pre) > code[class*='language-'],
pre[class*='language-'] {
  background: #f5f2f0;
}

/* Inline code */
:not(pre) > code[class*='language-'] {
  padding: 0.1em;
  border-radius: 0.3em;
  white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: slategray;
}

.token.punctuation {
  color: #999;
}

.namespace {
  opacity: 0.7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
  color: #905;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: #690;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  color: #9a6e3a;
  background: hsla(0, 0%, 100%, 0.5);
}

.token.atrule,
.token.attr-value,
.token.keyword {
  color: #07a;
}

.token.function,
.token.class-name {
  color: #dd4a68;
}

.token.regex,
.token.important,
.token.variable {
  color: #e90;
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}`,le=`import { InfoCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, message, Space, Tag, Tooltip } from 'antd';
import React from 'react';
import { Search, Table, useTable, withTable } from 'table-render';
import request from 'umi-request';

const schema = {
  type: 'object',
  properties: {
    state: {
      title: '\u9152\u5E97\u72B6\u6001',
      type: 'string',
      enum: ['open', 'closed'],
      enumNames: ['\u8425\u4E1A\u4E2D', '\u5DF2\u6253\u70CA'],
      width: '25%',
      widget: 'select',
    },
    labels: {
      title: '\u9152\u5E97\u661F\u7EA7',
      type: 'string',
      width: '25%',
    },
    created_at: {
      title: '\u6210\u7ACB\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '25%',
    },
  },
  labelWidth: 80,
};

const Demo = () => {
  const { refresh } = useTable();

  const searchApi = (params, sorter) => {
    console.group(sorter);
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        if (res && res.data) {
          return {
            rows: [...res.data, { money: null }],
            total: res.data.length,
          };
        }
      })
      .catch(e => {
        console.log('Oops, error', e);

        // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
        return {
          rows: [],
          total: 0,
        };
      });
  };

  const searchApi2 = params => {
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        if (res && res.data) {
          return {
            rows: res.data.slice(1),
            total: res.data.length - 1,
          };
        }
      })
      .catch(e => {
        console.log('Oops, error', e);
        return {
          rows: [],
          total: 0,
        };
      });
  };

  // \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
  const columns = [
    {
      title: '\u9152\u5E97\u540D\u79F0',
      dataIndex: 'title',
      valueType: 'text',
      width: '20%',
    },
    {
      title: '\u9152\u5E97\u5730\u5740',
      dataIndex: 'address',
      ellipsis: true,
      copyable: true,
      valueType: 'text',
      width: '25%',
    },
    {
      title: (
        <>
          \u9152\u5E97\u72B6\u6001
          <Tooltip placement="top" title="\u4F7F\u7528valueType">
            <InfoCircleOutlined style={{ marginLeft: 6 }} />
          </Tooltip>
        </>
      ),
      enum: {
        open: '\u8425\u4E1A\u4E2D',
        closed: '\u5DF2\u6253\u70CA',
      },
      dataIndex: 'state',
    },
    {
      title: '\u9152\u5E97\u661F\u7EA7',
      dataIndex: 'labels',
      render: (_, row) => (
        <Space>
          {row?.labels?.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },

    {
      title: '\u9152\u5E97GMV',
      key: 'money',
      sorter: true,
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: '\u6210\u7ACB\u65F6\u95F4',
      key: 'created_at',
      dataIndex: 'created_at',
      valueType: 'date',
    },
    {
      title: '\u64CD\u4F5C',
      render: () => (
        <Space>
          <a target="_blank" key="1">
            <div
              onClick={() => {
                message.success('\u9884\u8BA2\u6210\u529F');
              }}
            >
              \u9884\u8BA2
            </div>
          </a>
        </Space>
      ),
    },
  ];

  const showData = () => {
    refresh(null, { extra: 1 });
  };

  return (
    <div>
      <Search
        schema={schema}
        displayType="row"
        api={[
          {
            name: '\u5168\u90E8\u6570\u636E',
            api: searchApi,
          },
          {
            name: '\u6211\u7684\u6570\u636E',
            api: searchApi2,
          },
        ]}
      />
      <Table
        pagination={{ pageSize: 4 }}
        columns={columns}
        rowKey="id"
        toolbarRender={() => [
          <Button key="show" onClick={showData}>
            \u67E5\u770B\u65E5\u5FD7
          </Button>,
          <Button key="out" onClick={showData}>
            \u5BFC\u51FA\u6570\u636E
          </Button>,
          <Button
            key="primary"
            type="primary"
            onClick={() => alert('table-render\uFF01')}
          >
            <PlusOutlined />
            \u521B\u5EFA
          </Button>,
        ]}
        toolbarAction
      />
    </div>
  );
};

export default withTable(Demo);`,ue=`import { InfoCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, message, Space, Tag, Tooltip } from 'antd';
import React from 'react';
import { Search, Table, useTable, withTable } from 'table-render';
import request from 'umi-request';

const schema = {
  type: 'object',
  properties: {
    state: {
      title: '\u9152\u5E97\u72B6\u6001',
      type: 'string',
      enum: ['open', 'closed'],
      enumNames: ['\u8425\u4E1A\u4E2D', '\u5DF2\u6253\u70CA'],
      width: '25%',
      widget: 'select',
    },
    labels: {
      title: '\u9152\u5E97\u661F\u7EA7',
      type: 'string',
      width: '25%',
    },
  },
  labelWidth: 80,
};

const Demo = () => {
  const { refresh } = useTable();

  const searchApi = params => {
    console.log('params >>> ', params);
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        if (res && res.data) {
          return {
            rows: res.data,
            total: res.data.length,
            extraData: res.status,
          };
        }
      })
      .catch(e => {
        console.log('Oops, error', e);
        // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
        return {
          rows: [],
          total: 0,
        };
      });
  };

  // \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
  const columns = [
    {
      title: '\u9152\u5E97\u540D\u79F0',
      dataIndex: 'title',
      valueType: 'text',
      width: '20%',
    },
    {
      title: '\u9152\u5E97\u5730\u5740',
      dataIndex: 'address',
      ellipsis: true,
      copyable: true,
      valueType: 'text',
      width: '25%',
    },
    {
      title: (
        <>
          \u9152\u5E97\u72B6\u6001
          <Tooltip placement="top" title="\u4F7F\u7528valueType">
            <InfoCircleOutlined style={{ marginLeft: 6 }} />
          </Tooltip>
        </>
      ),
      enum: {
        open: '\u8425\u4E1A\u4E2D',
        closed: '\u5DF2\u6253\u70CA',
      },
      dataIndex: 'state',
    },
    {
      title: '\u9152\u5E97\u661F\u7EA7',
      dataIndex: 'labels',
      render: (_, row) => (
        <Space>
          {row.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },

    {
      title: '\u9152\u5E97GMV',
      key: 'money',
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: '\u64CD\u4F5C',
      render: row => (
        <Space>
          <a target="_blank" key="1">
            <div
              onClick={() => {
                message.success('\u9884\u8BA2\u6210\u529F');
              }}
            >
              \u9884\u8BA2
            </div>
          </a>
        </Space>
      ),
    },
  ];

  const showData = () => {
    refresh(null, { extra: 1 });
  };

  return (
    <div>
      <Search
        hidden
        schema={schema}
        displayType="row"
        onSearch={search => console.log('onSearch', search)}
        afterSearch={params => console.log('afterSearch', params)}
        api={searchApi}
      />
      <Table
        debug
        columns={columns}
        headerTitle="\u9AD8\u7EA7\u8868\u5355"
        rowKey="id"
        toolbarRender={() => [
          <Button key="show" onClick={showData}>
            \u67E5\u770B\u65E5\u5FD7
          </Button>,
          <Button key="out" onClick={showData}>
            \u5BFC\u51FA\u6570\u636E
          </Button>,
          <Button
            key="primary"
            type="primary"
            onClick={() => alert('table-render\uFF01')}
          >
            <PlusOutlined />
            \u521B\u5EFA
          </Button>,
        ]}
        toolbarAction
      />
    </div>
  );
};

export default withTable(Demo);`,de=`import { InfoCircleOutlined } from '@ant-design/icons';
import { message, Space, Tag, Tooltip } from 'antd';
import React from 'react';
import { Search, Table, useTable, withTable } from 'table-render';
import request from 'umi-request';

const schema = {
  type: 'object',
  properties: {
    state: {
      title: '\u9152\u5E97\u72B6\u6001',
      type: 'string',
      enum: ['open', 'closed'],
      enumNames: ['\u8425\u4E1A\u4E2D', '\u5DF2\u6253\u70CA'],
      width: '25%',
      widget: 'select',
    },
    labels: {
      title: '\u9152\u5E97\u661F\u7EA7',
      type: 'string',
      width: '25%',
    },
  },
  labelWidth: 80,
};

const Demo = () => {
  const { refresh } = useTable();

  const searchApi = params => {
    console.log('params >>> ', params);
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        if (res && res.data) {
          return {
            rows: res.data,
            total: res.data.length,
            extraData: res.status,
          };
        }
      })
      .catch(e => {
        console.log('Oops, error', e);
        // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
        return {
          rows: [],
          total: 0,
        };
      });
  };

  // \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
  const columns = [
    {
      title: '\u9152\u5E97\u540D\u79F0',
      dataIndex: 'title',
      valueType: 'text',
      width: '20%',
    },
    {
      title: '\u9152\u5E97\u5730\u5740',
      dataIndex: 'address',
      ellipsis: true,
      copyable: true,
      valueType: 'text',
      width: '25%',
    },
    {
      title: (
        <>
          \u9152\u5E97\u72B6\u6001
          <Tooltip placement="top" title="\u4F7F\u7528valueType">
            <InfoCircleOutlined style={{ marginLeft: 6 }} />
          </Tooltip>
        </>
      ),
      enum: {
        open: '\u8425\u4E1A\u4E2D',
        closed: '\u5DF2\u6253\u70CA',
      },
      dataIndex: 'state',
    },
    {
      title: '\u9152\u5E97\u661F\u7EA7',
      dataIndex: 'labels',
      render: (_, row) => (
        <Space>
          {row.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },

    {
      title: '\u9152\u5E97GMV',
      key: 'money',
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: '\u64CD\u4F5C',
      render: row => (
        <Space>
          <a target="_blank" key="1">
            <div
              onClick={() => {
                message.success('\u9884\u8BA2\u6210\u529F');
              }}
            >
              \u9884\u8BA2
            </div>
          </a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Search
        hidden
        schema={schema}
        displayType="row"
        onSearch={search => console.log('onSearch', search)}
        afterSearch={params => console.log('afterSearch', params)}
        api={searchApi}
      />
      <Table columns={columns} rowKey="id" />
    </div>
  );
};

export default withTable(Demo);`,me=`import { InfoCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, message, Space, Tag, Tooltip } from 'antd';
import React, { useEffect } from 'react';
import { Search, Table, useTable, withTable } from 'table-render';
import { history } from 'umi';
import request from 'umi-request';

const schema = {
  type: 'object',
  properties: {
    state: {
      title: '\u9152\u5E97\u72B6\u6001',
      type: 'string',
      enum: ['open', 'closed'],
      enumNames: ['\u8425\u4E1A\u4E2D', '\u5DF2\u6253\u70CA'],
      width: '25%',
      widget: 'select',
    },
    labels: {
      title: '\u9152\u5E97\u661F\u7EA7',
      type: 'string',
      width: '25%',
    },
    created_at: {
      title: '\u6210\u7ACB\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '25%',
    },
  },
  labelWidth: 80,
};

const Demo = () => {
  const { form } = useTable();
  useEffect(() => {
    // \u5B9E\u9645\u4F7F\u7528\u65F6queryParam\u4E3Aurl\u4E0A\u53D6\u4E0B\u6765\u7684\u6709\u6548\u53C2\u6570
    // const queryParam = { state: 'open' };
    const queryParam = history.location.query;
    if (queryParam) {
      // form\u5177\u4F53api\u53C2\u8003form-render\u6587\u6863
      form.setValues(queryParam);
    }
  }, []);

  // \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
  const columns = [
    {
      title: '\u9152\u5E97\u540D\u79F0',
      dataIndex: 'title',
      valueType: 'text',
      width: '20%',
    },
    {
      title: '\u9152\u5E97\u5730\u5740',
      dataIndex: 'address',
      ellipsis: true,
      copyable: true,
      valueType: 'text',
      width: '25%',
    },
    {
      title: (
        <>
          \u9152\u5E97\u72B6\u6001
          <Tooltip placement="top" title="\u4F7F\u7528valueType">
            <InfoCircleOutlined style={{ marginLeft: 6 }} />
          </Tooltip>
        </>
      ),
      enum: {
        open: '\u8425\u4E1A\u4E2D',
        closed: '\u5DF2\u6253\u70CA',
      },
      dataIndex: 'state',
    },
    {
      title: '\u9152\u5E97\u661F\u7EA7',
      dataIndex: 'labels',
      render: (_, row) => (
        <Space>
          {row.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },
    {
      title: '\u9152\u5E97GMV',
      key: 'money',
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: '\u6210\u7ACB\u65F6\u95F4',
      key: 'created_at',
      dataIndex: 'created_at',
      valueType: 'date',
    },
    {
      title: '\u64CD\u4F5C',
      render: () => (
        <Space>
          <a target="_blank" key="1">
            <div
              onClick={() => {
                message.success('\u9884\u8BA2\u6210\u529F');
              }}
            >
              \u9884\u8BA2
            </div>
          </a>
        </Space>
      ),
    },
  ];

  const searchApi = params => {
    console.log('params >>> ', params);
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        if (res && res.data) {
          return {
            rows: res.data,
            total: res.data.length,
            extraData: res.status,
          };
        }
      })
      .catch(e => {
        console.log('Oops, error', e);
        // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
        return {
          rows: [],
          total: 0,
        };
      });
  };

  const onSearch = search => {
    console.log('onSearch', search);
  };

  const afterSearch = params => {
    const formData = form.getValues();
    history.replace({
      pathname: '/table-render/demo',
      query: formData,
    });
  };

  return (
    <div>
      <Search
        schema={schema}
        displayType="row"
        onSearch={onSearch}
        afterSearch={afterSearch}
        api={searchApi}
      />
      <Table
        columns={columns}
        headerTitle="url\u5E26\u53C2\u67E5\u8BE2"
        rowKey="id"
        toolbarRender={() => [
          <Button
            key="primary"
            type="primary"
            onClick={() => alert('table-render\uFF01')}
          >
            <PlusOutlined />
            \u521B\u5EFA
          </Button>,
        ]}
        toolbarAction
      />
    </div>
  );
};

export default withTable(Demo);`,pe=`import { InfoCircleOutlined } from '@ant-design/icons';
import { message, Space, Tag, Tooltip } from 'antd';
import React from 'react';
import { Search, Table, useTable, withTable } from 'table-render';
import { ProColumnsType } from 'table-render/src/interface';
import request from 'umi-request';

const schema = {
  type: 'object',
  labelWidth: 80,
  properties: {
    state: {
      title: '\u9152\u5E97\u72B6\u6001',
      type: 'string',
      enum: ['open', 'closed'],
      enumNames: ['\u8425\u4E1A\u4E2D', '\u5DF2\u6253\u70CA'],
      width: '33%',
      widget: 'select',
    },
    labels: {
      title: '\u9152\u5E97\u661F\u7EA7',
      type: 'string',
      width: '33%',
    },
  },
};

interface RecordType {
  id: number;
  number: number;
  address: string;
  title: string;
  room: number;
  money: number;
  state: string;
  created_at: string;
  labels: Array<{ name: string; color: string }>;
}

const Demo = () => {
  // \u6B64\u5904\u8868\u793AtableState.dataSource\u7B26\u5408Array<RecordType>
  const { tableState, refresh } = useTable<RecordType>();

  const searchApi = (params, sorter) => {
    console.group(sorter);
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        if (res && res.data) {
          return {
            rows: res.data,
            total: res.data.length,
          };
        }
      })
      .catch(e => {
        return {
          rows: [],
          total: 0,
        };
      });
  };

  // ProColumnsType\u7684\u4F7F\u7528\u4E0Eantd\u7C7B\u4F3C
  const columns: ProColumnsType<RecordType> = [
    {
      title: '\u9152\u5E97\u540D\u79F0',
      dataIndex: 'title',
      valueType: 'code',
      width: '20%',
    },
    {
      title: '\u9152\u5E97\u5730\u5740',
      dataIndex: 'address',
      ellipsis: true,
      copyable: true,
      valueType: 'text',
      width: '25%',
    },
    {
      title: (
        <>
          \u9152\u5E97\u72B6\u6001
          <Tooltip placement="top" title="\u4F7F\u7528valueType">
            <InfoCircleOutlined style={{ marginLeft: 6 }} />
          </Tooltip>
        </>
      ),
      enum: {
        open: '\u8425\u4E1A\u4E2D',
        closed: '\u5DF2\u6253\u70CA',
      },
      dataIndex: 'state',
    },
    {
      title: '\u9152\u5E97\u661F\u7EA7',
      dataIndex: 'labels',
      render: (_, row) => (
        <Space>
          {row.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },
    {
      title: '\u9152\u5E97GMV',
      key: 'money',
      sorter: true,
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: '\u6210\u7ACB\u65F6\u95F4',
      key: 'created_at',
      dataIndex: 'created_at',
      valueType: 'date',
    },
    {
      title: '\u64CD\u4F5C',
      render: () => (
        <a
          onClick={() => {
            message.success('\u9884\u8BA2\u6210\u529F');
          }}
        >
          \u9884\u8BA2
        </a>
      ),
    },
  ];

  return (
    <div>
      {/* \u6B64\u5904\u8868\u793Aapi\u7684\u7684\u8FD4\u56DE\u503C\u9700\u8981\u7B26\u5408RecordType */}
      <Search<RecordType> schema={schema} displayType="row" api={searchApi} />
      {/* \u548Cantd\u7C7B\u4F3C\uFF0C\u4E0EProColumnsType\u914D\u5408\u4F7F\u7528 */}
      <Table<RecordType>
        pagination={{ pageSize: 4 }}
        columns={columns}
        rowKey="id"
      />
    </div>
  );
};

export default withTable(Demo);`,ce=`import React from 'react';
import { Search, Table, withTable } from 'table-render';

const Demo = () => {
  const searchApi = params => {
    return {
      rows: [],
      total: 0,
    };
  };

  // ProColumnsType\u7684\u4F7F\u7528\u4E0Eantd\u7C7B\u4F3C
  const columns = [];

  return (
    <div>
      <Search hidden displayType="row" api={searchApi} />
      {/* \u548Cantd\u7C7B\u4F3C\uFF0C\u4E0EProColumnsType\u914D\u5408\u4F7F\u7528 */}
      <Table
        style={false}
        pagination={{ pageSize: 4 }}
        columns={columns}
        rowKey="id"
      />
    </div>
  );
};

export default withTable(Demo);`,fe={"chart-render-demo":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a,m;return y.a.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return a=function(s,p){if(!p&&s&&s.__esModule)return s;if(s===null||typeof s!="object"&&typeof s!="function")return{default:s};var o=f(p);if(o&&o.has(s))return o.get(s);var n={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in s)if(i!=="default"&&Object.prototype.hasOwnProperty.call(s,i)){var h=d?Object.getOwnPropertyDescriptor(s,i):null;h&&(h.get||h.set)?Object.defineProperty(n,i,h):n[i]=s[i]}return n.default=s,o&&o.set(s,n),n},f=function(s){if(typeof WeakMap!="function")return null;var p=new WeakMap,o=new WeakMap;return(f=function(d){return d?o:p})(s)},l=e("K+nK"),D.t0=l,D.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return D.t1=D.sent,r=(0,D.t0)(D.t1),D.t2=a,D.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return D.t3=D.sent,u=(0,D.t2)(D.t3),D.next=15,Promise.all([e.e(0),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 15:return c=D.sent,m=function(){var s=(0,u.useState)("Line"),p=(0,r.default)(s,2),o=p[0],n=p[1],d={Line:c.Line,Column:c.Column,PivotTable:c.PivotTable}[o];return u.default.createElement("div",null,u.default.createElement("div",{style:{marginBottom:10}},u.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return n("Line")}},"\u6298\u7EBF\u56FE"),u.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return n("Column")}},"\u67F1\u72B6\u56FE"),u.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return n("PivotTable")}},"\u4EA4\u53C9\u8868")),u.default.createElement(d,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},D.abrupt("return",m);case 18:case"end":return D.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Line, Column, PivotTable } from 'chart-render';

export default () => {
  const [component, setComponent] = useState('Line');
  const ChartRender = { Line, Column, PivotTable }[component];

  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <button
          style={{ marginRight: 10 }}
          className="ant-btn ant-btn-primary"
          onClick={() => setComponent('Line')}
        >
          \u6298\u7EBF\u56FE
        </button>
        <button
          style={{ marginRight: 10 }}
          className="ant-btn ant-btn-primary"
          onClick={() => setComponent('Column')}
        >
          \u67F1\u72B6\u56FE
        </button>
        <button
          style={{ marginRight: 10 }}
          className="ant-btn ant-btn-primary"
          onClick={() => setComponent('PivotTable')}
        >
          \u4EA4\u53C9\u8868
        </button>
      </div>

      <ChartRender
        meta={[
          { id: 'date', name: '\u65E5\u671F', isDim: true },
          { id: 'pv', name: '\u8BBF\u95EE\u91CF', isDim: false },
          { id: 'uv', name: '\u8BBF\u5BA2\u6570', isDim: false },
        ]}
        data={[
          { date: '20200101', pv: 100, uv: 50 },
          { date: '20200102', pv: 120, uv: 60 },
          { date: '20200103', pv: 140, uv: 70 },
          { date: '20200104', pv: 160, uv: 80 },
        ]}
      />
    </div>
  );
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return l=e("K+nK"),a.t0=l,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,r=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return u=a.sent,c=function(){return r.default.createElement(u.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},a.abrupt("return",c);case 11:case"end":return a.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return l=e("K+nK"),a.t0=l,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,r=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return u=a.sent,c=function(){return r.default.createElement(u.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},a.abrupt("return",c);case 11:case"end":return a.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', uv: 20 },
      { ds: '2021-01-01', uv: 21 },
      { ds: '2021-01-02', uv: 15 },
      { ds: '2021-01-03', uv: 40 },
      { ds: '2021-01-04', uv: 31 },
      { ds: '2021-01-05', uv: 32 },
      { ds: '2021-01-06', uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return l=e("K+nK"),a.t0=l,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,r=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return u=a.sent,c=function(){return r.default.createElement(u.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},a.abrupt("return",c);case 11:case"end":return a.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'page', name: '\u9875\u9762\u540D\u79F0', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', page: '\u767B\u5F55\u9875', uv: 20 },
      { ds: '2020-12-31', page: '\u9996\u9875', uv: 120 },
      { ds: '2021-01-01', page: '\u767B\u5F55\u9875', uv: 21 },
      { ds: '2021-01-01', page: '\u9996\u9875', uv: 121 },
      { ds: '2021-01-02', page: '\u767B\u5F55\u9875', uv: 15 },
      { ds: '2021-01-02', page: '\u9996\u9875', uv: 115 },
      { ds: '2021-01-03', page: '\u767B\u5F55\u9875', uv: 40 },
      { ds: '2021-01-03', page: '\u9996\u9875', uv: 140 },
      { ds: '2021-01-04', page: '\u767B\u5F55\u9875', uv: 31 },
      { ds: '2021-01-04', page: '\u9996\u9875', uv: 131 },
      { ds: '2021-01-05', page: '\u767B\u5F55\u9875', uv: 32 },
      { ds: '2021-01-05', page: '\u9996\u9875', uv: 132 },
      { ds: '2021-01-06', page: '\u767B\u5F55\u9875', uv: 30 },
      { ds: '2021-01-06', page: '\u9996\u9875', uv: 130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return l=e("K+nK"),a.t0=l,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,r=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return u=a.sent,c=function(){return r.default.createElement(u.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",c);case 11:case"end":return a.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return l=e("K+nK"),a.t0=l,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,r=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return u=a.sent,c=function(){return r.default.createElement(u.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",c);case 11:case"end":return a.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    inverted
    label={{
      position: 'middle',
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'interval-hide-overlap' },
        { type: 'adjust-color' },
      ],
    }}
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return l=e("K+nK"),a.t0=l,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,r=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return u=a.sent,c=function(){return r.default.createElement(u.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},a.abrupt("return",c);case 11:case"end":return a.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', uv: 20 },
      { ds: '2021-01-01', uv: 21 },
      { ds: '2021-01-02', uv: 15 },
      { ds: '2021-01-03', uv: 40 },
      { ds: '2021-01-04', uv: 31 },
      { ds: '2021-01-05', uv: 32 },
      { ds: '2021-01-06', uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return l=e("K+nK"),a.t0=l,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,r=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return u=a.sent,c=function(){return r.default.createElement(u.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},a.abrupt("return",c);case 11:case"end":return a.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'page', name: '\u9875\u9762\u540D\u79F0', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', page: '\u767B\u5F55\u9875', uv: 20 },
      { ds: '2020-12-31', page: '\u9996\u9875', uv: 120 },
      { ds: '2021-01-01', page: '\u767B\u5F55\u9875', uv: 21 },
      { ds: '2021-01-01', page: '\u9996\u9875', uv: 121 },
      { ds: '2021-01-02', page: '\u767B\u5F55\u9875', uv: 15 },
      { ds: '2021-01-02', page: '\u9996\u9875', uv: 115 },
      { ds: '2021-01-03', page: '\u767B\u5F55\u9875', uv: 40 },
      { ds: '2021-01-03', page: '\u9996\u9875', uv: 140 },
      { ds: '2021-01-04', page: '\u767B\u5F55\u9875', uv: 31 },
      { ds: '2021-01-04', page: '\u9996\u9875', uv: 131 },
      { ds: '2021-01-05', page: '\u767B\u5F55\u9875', uv: 32 },
      { ds: '2021-01-05', page: '\u9996\u9875', uv: 132 },
      { ds: '2021-01-06', page: '\u767B\u5F55\u9875', uv: 30 },
      { ds: '2021-01-06', page: '\u9996\u9875', uv: 130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return l=e("K+nK"),a.t0=l,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,r=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return u=a.sent,c=function(){return r.default.createElement(u.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},a.abrupt("return",c);case 11:case"end":return a.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'page', name: '\u9875\u9762\u540D\u79F0', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
    ]}
    data={[
      { ds: '2020-12-31', page: '\u767B\u5F55\u9875', uv: 20, pv: 120 },
      { ds: '2020-12-31', page: '\u9996\u9875', uv: 120, pv: 1120 },
      { ds: '2021-01-01', page: '\u767B\u5F55\u9875', uv: 21, pv: 121 },
      { ds: '2021-01-01', page: '\u9996\u9875', uv: 121, pv: 1121 },
      { ds: '2021-01-02', page: '\u767B\u5F55\u9875', uv: 15, pv: 115 },
      { ds: '2021-01-02', page: '\u9996\u9875', uv: 115, pv: 1115 },
      { ds: '2021-01-03', page: '\u767B\u5F55\u9875', uv: 40, pv: 140 },
      { ds: '2021-01-03', page: '\u9996\u9875', uv: 140, pv: 1140 },
      { ds: '2021-01-04', page: '\u767B\u5F55\u9875', uv: 31, pv: 131 },
      { ds: '2021-01-04', page: '\u9996\u9875', uv: 131, pv: 1131 },
      { ds: '2021-01-05', page: '\u767B\u5F55\u9875', uv: 32, pv: 132 },
      { ds: '2021-01-05', page: '\u9996\u9875', uv: 132, pv: 1132 },
      { ds: '2021-01-06', page: '\u767B\u5F55\u9875', uv: 30, pv: 130 },
      { ds: '2021-01-06', page: '\u9996\u9875', uv: 130, pv: 1130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return l=e("K+nK"),a.t0=l,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,r=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return u=a.sent,c=function(){return r.default.createElement(u.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",c);case 11:case"end":return a.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return l=e("K+nK"),a.t0=l,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,r=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return u=a.sent,c=function(){return r.default.createElement(u.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",c);case 11:case"end":return a.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    withArea // \u5F00\u542F\u9762\u79EF\u56FE
    isStack // \u5806\u53E0\u5C55\u793A
    isPercent // \u767E\u5206\u6BD4\u9762\u79EF\u56FE
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return l=e("K+nK"),a.t0=l,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,r=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return u=a.sent,c=function(){return r.default.createElement(u.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},a.abrupt("return",c);case 11:case"end":return a.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { PivotTable } from 'chart-render';

export default () => (
  <PivotTable
    style={{ maxHeight: 400, overflow: 'auto' }}
    meta={[
      { id: 'subs', name: '\u5B50\u516C\u53F8', isDim: true, isRate: false },
      { id: 'shop', name: '\u95E8\u5E97', isDim: true, isRate: false },
      { id: 'season', name: '\u5B63\u5EA6', isDim: true, isRate: false },
      { id: 'month', name: '\u6708\u4EFD', isDim: true, isRate: false },
      { id: 'valueA', name: '\u6307\u6807A', isDim: false, isRate: false },
      { id: 'valueB', name: '\u6307\u6807B', isDim: false, isRate: true },
    ]}
    data={[
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 782,
        valueB: 0.566,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 856,
        valueB: 0.403,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 886,
        valueB: 0.555,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 555,
        valueB: 0.444,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 444,
        valueB: 0.333,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 922,
        valueB: 0.778,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 888,
        valueB: 0.887,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 879,
        valueB: 0.87,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 800,
        valueB: 0.723,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 813,
        valueB: 0.789,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 500,
        valueB: 0.463,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 833,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 821,
        valueB: 0.442,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 834,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 803,
        valueB: 0.7,
      },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return l=e("K+nK"),a.t0=l,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,r=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return u=a.sent,c=function(){return r.default.createElement(u.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(D,R,s){return r.default.createElement("div",null,r.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),r.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(R).length]}},D),r.default.createElement("p",null,JSON.stringify(R)),r.default.createElement("p",null,JSON.stringify(s)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},a.abrupt("return",c);case 11:case"end":return a.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { PivotTable } from 'chart-render';

export default () => (
  <PivotTable
    style={{ maxHeight: 400, overflow: 'auto' }}
    cellRender={(val, dimRecord, indId) => (
      <div>
        <p>\u53C2\u6570\u8868\uFF1A</p>
        <p
          style={{
            color: ['red', 'orange', 'yellow', 'green', 'blue'][
              Object.keys(dimRecord).length
            ],
          }}
        >
          {val}
        </p>
        <p>{JSON.stringify(dimRecord)}</p>
        <p>{JSON.stringify(indId)}</p>
      </div>
    )}
    meta={[
      { id: 'subs', name: '\u5B50\u516C\u53F8', isDim: true, isRate: false },
      { id: 'shop', name: '\u95E8\u5E97', isDim: true, isRate: false },
      { id: 'season', name: '\u5B63\u5EA6', isDim: true, isRate: false },
      { id: 'month', name: '\u6708\u4EFD', isDim: true, isRate: false },
      { id: 'valueA', name: '\u6307\u6807A', isDim: false, isRate: false },
      { id: 'valueB', name: '\u6307\u6807B', isDim: false, isRate: true },
    ]}
    data={[
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 782,
        valueB: 0.566,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 856,
        valueB: 0.403,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 886,
        valueB: 0.555,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 555,
        valueB: 0.444,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 444,
        valueB: 0.333,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 922,
        valueB: 0.778,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 888,
        valueB: 0.887,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 879,
        valueB: 0.87,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 800,
        valueB: 0.723,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 813,
        valueB: 0.789,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 500,
        valueB: 0.463,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 833,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 821,
        valueB: 0.442,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 834,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 803,
        valueB: 0.7,
      },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a,m;return y.a.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return a=function(s,p){if(!p&&s&&s.__esModule)return s;if(s===null||typeof s!="object"&&typeof s!="function")return{default:s};var o=f(p);if(o&&o.has(s))return o.get(s);var n={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in s)if(i!=="default"&&Object.prototype.hasOwnProperty.call(s,i)){var h=d?Object.getOwnPropertyDescriptor(s,i):null;h&&(h.get||h.set)?Object.defineProperty(n,i,h):n[i]=s[i]}return n.default=s,o&&o.set(s,n),n},f=function(s){if(typeof WeakMap!="function")return null;var p=new WeakMap,o=new WeakMap;return(f=function(d){return d?o:p})(s)},l=e("K+nK"),D.t0=l,D.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return D.t1=D.sent,r=(0,D.t0)(D.t1),D.t2=a,D.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return D.t3=D.sent,u=(0,D.t2)(D.t3),D.next=15,Promise.all([e.e(0),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 15:return c=D.sent,m=function(){var s=(0,u.useState)(!1),p=(0,r.default)(s,2),o=p[0],n=p[1];return u.default.createElement(u.default.Fragment,null,u.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",u.default.createElement("input",{type:"checkbox",value:o,onChange:function(){return n(!o)}})),u.default.createElement(c.PivotTable,{leftExpandable:o,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},D.abrupt("return",m);case 18:case"end":return D.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { PivotTable } from 'chart-render';

export default () => {
  const [expandable, setExpandable] = useState(false);

  return (
    <>
      <label>
        \u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A
        <input
          type="checkbox"
          value={expandable}
          onChange={() => setExpandable(!expandable)}
        />
      </label>
      <PivotTable
        leftExpandable={expandable}
        showSubtotal={false}
        meta={[
          { id: 'subs', name: '\u5B50\u516C\u53F8', isDim: true, isRate: false },
          { id: 'shop', name: '\u95E8\u5E97', isDim: true, isRate: false },
          { id: 'season', name: '\u5B63\u5EA6', isDim: true, isRate: false },
          { id: 'month', name: '\u6708\u4EFD', isDim: true, isRate: false },
          { id: 'valueA', name: '\u6307\u6807A', isDim: false, isRate: false },
          { id: 'valueB', name: '\u6307\u6807B', isDim: false, isRate: true },
        ]}
        data={[
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-01',
            valueA: 782,
            valueB: 0.566,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-02',
            valueA: 856,
            valueB: 0.403,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-03',
            valueA: 886,
            valueB: 0.555,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-04',
            valueA: 555,
            valueB: 0.444,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-05',
            valueA: 444,
            valueB: 0.333,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-01',
            valueA: 922,
            valueB: 0.778,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-02',
            valueA: 888,
            valueB: 0.887,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-03',
            valueA: 879,
            valueB: 0.87,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-04',
            valueA: 800,
            valueB: 0.723,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-05',
            valueA: 813,
            valueB: 0.789,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-01',
            valueA: 500,
            valueB: 0.463,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-02',
            valueA: 833,
            valueB: 0.456,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-03',
            valueA: 821,
            valueB: 0.442,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-04',
            valueA: 834,
            valueB: 0.456,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-05',
            valueA: 803,
            valueB: 0.7,
          },
        ]}
      />
    </>
  );
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a,m,t,D;return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return a=function(o,n){if(!n&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var d=f(n);if(d&&d.has(o))return d.get(o);var i={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in o)if(v!=="default"&&Object.prototype.hasOwnProperty.call(o,v)){var P=h?Object.getOwnPropertyDescriptor(o,v):null;P&&(P.get||P.set)?Object.defineProperty(i,v,P):i[v]=o[v]}return i.default=o,d&&d.set(o,i),i},f=function(o){if(typeof WeakMap!="function")return null;var n=new WeakMap,d=new WeakMap;return(f=function(h){return h?d:n})(o)},l=e("K+nK"),s.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return s.t0=l,s.next=8,e.e(2).then(e.t.bind(null,"4IMT",7));case 8:return s.t1=s.sent,r=(0,s.t0)(s.t1),s.t2=l,s.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return s.t3=s.sent,u=(0,s.t2)(s.t3),s.t4=a,s.next=18,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(6)]).then(e.bind(null,"refC"));case 18:return s.t5=s.sent,c=(0,s.t4)(s.t5),m={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},t=function(){var o=(0,c.useForm)(),n=function(i,h){console.log("formData:",i,"errors",h)};return u.default.createElement("div",null,u.default.createElement(c.default,{form:o,schema:m,onFinish:n}),u.default.createElement(r.default,{type:"primary",onClick:o.submit},"\u63D0\u4EA4"))},D=t,s.abrupt("return",D);case 24:case"end":return s.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errors) => {
    console.log('formData:', formData, 'errors', errors);
  };
  return (
    <div>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a,m,t,D,R,s,p,o;return y.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return R=function(h,v){if(!v&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var P=D(v);if(P&&P.has(h))return P.get(h);var j={},F=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var N in h)if(N!=="default"&&Object.prototype.hasOwnProperty.call(h,N)){var w=F?Object.getOwnPropertyDescriptor(h,N):null;w&&(w.get||w.set)?Object.defineProperty(j,N,w):j[N]=h[N]}return j.default=h,P&&P.set(h,j),j},D=function(h){if(typeof WeakMap!="function")return null;var v=new WeakMap,P=new WeakMap;return(D=function(F){return F?P:v})(h)},l=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=l,d.next=8,e.e(2).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,r=(0,d.t0)(d.t1),d.t2=l,d.next=13,e.e(67).then(e.bind(null,"fWQN"));case 13:return d.t3=d.sent,u=(0,d.t2)(d.t3),d.t4=l,d.next=18,e.e(68).then(e.bind(null,"mtLc"));case 18:return d.t5=d.sent,c=(0,d.t4)(d.t5),d.t6=l,d.next=23,e.e(70).then(e.bind(null,"yKVA"));case 23:return d.t7=d.sent,f=(0,d.t6)(d.t7),d.t8=l,d.next=28,e.e(65).then(e.bind(null,"879j"));case 28:return d.t9=d.sent,a=(0,d.t8)(d.t9),d.t10=l,d.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return d.t11=d.sent,m=(0,d.t10)(d.t11),d.t12=R,d.next=38,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(6)]).then(e.bind(null,"refC"));case 38:return d.t13=d.sent,t=(0,d.t12)(d.t13),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},p=function(i){(0,f.default)(v,i);var h=(0,a.default)(v);function v(){var P;(0,u.default)(this,v);for(var j=arguments.length,F=new Array(j),N=0;N<j;N++)F[N]=arguments[N];return P=h.call.apply(h,[this].concat(F)),P.onFinish=function(w,T){console.log("formData:",w,"errors",T)},P}return(0,c.default)(v,[{key:"render",value:function(){var j=this.props.form;return m.default.createElement("div",null,m.default.createElement(t.default,{form:j,schema:s,onFinish:this.onFinish}),m.default.createElement(r.default,{type:"primary",onClick:j.submit},"\u63D0\u4EA4"))}}]),v}(m.default.Component),o=(0,t.connectForm)(p),d.abrupt("return",o);case 44:case"end":return d.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { connectForm } from 'form-render';
// import 'antd/dist/antd.css';    \u5982\u679C\u9879\u76EE\u6CA1\u6709\u5BF9antd\u3001less\u505A\u4EFB\u4F55\u914D\u7F6E\u7684\u8BDD\uFF0C\u9700\u8981\u52A0\u4E0A

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

class Demo extends React.Component {
  onFinish = (formData, errors) => {
    console.log('formData:', formData, 'errors', errors);
  };

  render() {
    const { form } = this.props;
    return (
      <div>
        <FormRender form={form} schema={schema} onFinish={this.onFinish} />
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4
        </Button>
      </div>
    );
  }
}

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"migrate-demo":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a,m,t;return y.a.wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return m=function(){var p=(0,u.useForm)(),o=function(d,i){i.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(i))):alert(JSON.stringify(d))};return r.default.createElement("div",null,r.default.createElement(u.default,{form:p,schema:a,onFinish:o}),r.default.createElement("button",{onClick:p.submit},"\u63D0\u4EA4"))},f=function(p,o){if(!o&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var n=c(o);if(n&&n.has(p))return n.get(p);var d={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in p)if(h!=="default"&&Object.prototype.hasOwnProperty.call(p,h)){var v=i?Object.getOwnPropertyDescriptor(p,h):null;v&&(v.get||v.set)?Object.defineProperty(d,h,v):d[h]=p[h]}return d.default=p,n&&n.set(p,d),d},c=function(p){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(c=function(i){return i?n:o})(p)},l=e("K+nK"),R.t0=l,R.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return R.t1=R.sent,r=(0,R.t0)(R.t1),R.t2=f,R.next=12,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(6)]).then(e.bind(null,"refC"));case 12:return R.t3=R.sent,u=(0,R.t2)(R.t3),a={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},t=m,R.abrupt("return",t);case 17:case"end":return R.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FormRender, { useForm } from 'form-render'; // 1. \u6539 import

const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u5B57\u7B26\u4E32',
      type: 'string',
      required: true,
    },
  },
};

function Demo() {
  const form = useForm(); // 2. \u83B7\u53D6 form \u5B9E\u4F8B\uFF0C\u73B0\u5728\u6240\u6709\u8868\u5355\u65B9\u6CD5\u90FD\u6302\u5728\u4E0A\u9762
  // 3 onSubmit \u7684\u5165\u53C2
  const onSubmit = (formData, valid) => {
    if (valid.length > 0) {
      alert(\`\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A\${JSON.stringify(valid)}\`);
    } else {
      alert(JSON.stringify(formData));
    }
  };
  return (
    <div>
      <FormRender
        form={form} // 4 \u8865\u4E0A
        schema={schema}
        onFinish={onSubmit} // 5. \u8865\u4E0A
        // formData={formData} // 6. \u5E72\u6389
        // onChange={setData}
        // onValidate={setValid}
      />
      <button onClick={form.submit}>\u63D0\u4EA4</button>
    </div>
  );
}
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"migrate-demo-1":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a,m,t,D,R,s,p;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=function(i,h){if(!h&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var v=m(h);if(v&&v.has(i))return v.get(i);var P={},j=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var F in i)if(F!=="default"&&Object.prototype.hasOwnProperty.call(i,F)){var N=j?Object.getOwnPropertyDescriptor(i,F):null;N&&(N.get||N.set)?Object.defineProperty(P,F,N):P[F]=i[F]}return P.default=i,v&&v.set(i,P),P},m=function(i){if(typeof WeakMap!="function")return null;var h=new WeakMap,v=new WeakMap;return(m=function(j){return j?v:h})(i)},l=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=l,n.next=8,e.e(2).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,r=(0,n.t0)(n.t1),n.t2=l,n.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return n.t3=n.sent,u=(0,n.t2)(n.t3),n.next=17,Promise.all([e.e(3),e.e(15)]).then(e.t.bind(null,"cUip",7));case 17:return n.t4=l,n.next=20,Promise.all([e.e(0),e.e(2),e.e(13),e.e(17)]).then(e.t.bind(null,"iJl9",7));case 20:return n.t5=n.sent,c=(0,n.t4)(n.t5),n.t6=t,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,f=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(64),e.e(66)]).then(e.bind(null,"DvhF"));case 29:return a=n.sent,D=c.default.TextArea,R={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},s=function(){var i=(0,f.useState)(JSON.stringify(R)),h=(0,u.default)(i,2),v=h[0],P=h[1],j=(0,f.useState)({}),F=(0,u.default)(j,2),N=F[0],w=F[1],T=function(){try{var I=(0,a.updateSchemaToNewVersion)(JSON.parse(v));w(I)}catch(be){console.log(be)}},A=function(I){P(I.target.value)},M=function(){P(JSON.stringify(JSON.parse(v),null,2))};return f.default.createElement("div",null,f.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),f.default.createElement(D,{style:{minHeight:400,marginTop:12,marginBottom:12},value:v,onChange:A}),f.default.createElement(r.default,{style:{marginRight:12},onClick:M},"\u683C\u5F0F\u5316\u65E7schema"),f.default.createElement(r.default,{type:"primary",onClick:T},"\u751F\u6210\u65B0\u7248schema"),f.default.createElement(D,{style:{minHeight:400,marginTop:12},value:JSON.stringify(N,null,2)}))},p=s,n.abrupt("return",p);case 35:case"end":return n.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { updateSchemaToNewVersion } from 'form-render/src/form-render-core/src/utils.js';

const TextArea = Input.TextArea;

const old = {
  type: 'object',
  properties: {
    number: {
      title: '\u6570\u5B57\u8F93\u5165\u6846',
      type: 'number',
      'ui:disabled': true,
    },
    checkbox: {
      title: '\u662F\u5426\u9009\u62E9',
      type: 'boolean',
      'ui:widget': 'switch',
    },
  },
  required: ['number'],
};

const Translator = () => {
  const [oldSchema, setOld] = useState(JSON.stringify(old));
  const [newSchema, setNew] = useState({});

  const handleClick = () => {
    try {
      const _newSchema = updateSchemaToNewVersion(JSON.parse(oldSchema));
      setNew(_newSchema);
    } catch (err) {
      console.log(err);
    }
  };

  const onOldChange = e => {
    setOld(e.target.value);
  };

  const formatOld = () => {
    setOld(JSON.stringify(JSON.parse(oldSchema), null, 2));
  };

  return (
    <div>
      <div>\u586B\u5165\u65E7\u7248schema\uFF1A</div>
      <TextArea
        style={{ minHeight: 400, marginTop: 12, marginBottom: 12 }}
        value={oldSchema}
        onChange={onOldChange}
      />
      <Button style={{ marginRight: 12 }} onClick={formatOld}>
        \u683C\u5F0F\u5316\u65E7schema
      </Button>
      <Button type="primary" onClick={handleClick}>
        \u751F\u6210\u65B0\u7248schema
      </Button>
      <TextArea
        style={{ minHeight: 400, marginTop: 12 }}
        value={JSON.stringify(newSchema, null, 2)}
      />
    </div>
  );
};

export default Translator;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},"react-dom":{version:">=16.8.0"}},identifier:"migrate-demo-1"}},"tutorial-demo":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a,m,t;return y.a.wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return f=function(p,o){if(!o&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var n=c(o);if(n&&n.has(p))return n.get(p);var d={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in p)if(h!=="default"&&Object.prototype.hasOwnProperty.call(p,h)){var v=i?Object.getOwnPropertyDescriptor(p,h):null;v&&(v.get||v.set)?Object.defineProperty(d,h,v):d[h]=p[h]}return d.default=p,n&&n.set(p,d),d},c=function(p){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(c=function(i){return i?n:o})(p)},l=e("K+nK"),R.t0=l,R.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return R.t1=R.sent,r=(0,R.t0)(R.t1),R.t2=f,R.next=11,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(6)]).then(e.bind(null,"refC"));case 11:return R.t3=R.sent,u=(0,R.t2)(R.t3),a={type:"object",properties:{address:{title:"\u5730\u5740",type:"string",placeholder:"\u8BF7\u8F93\u5165\u60A8\u7684\u5730\u5740",required:!0}}},m=function(){var p=(0,u.useForm)();return r.default.createElement(u.default,{schema:a,form:p})},t=m,R.abrupt("return",t);case 17:case"end":return R.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',             
  properties: {                    
    address: {                    
      title: '\u5730\u5740',               
      type: 'string',              
      placeholder: '\u8BF7\u8F93\u5165\u60A8\u7684\u5730\u5740', 
      required: true,              
    },
  },
};

const Demo = () => {
  const form = useForm();
 
  return (
      <FormRender schema={schema} form={form}  />
  );
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"tutorial-demo"}},"tutorial-demo-1":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a,m,t;return y.a.wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return f=function(p,o){if(!o&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var n=c(o);if(n&&n.has(p))return n.get(p);var d={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in p)if(h!=="default"&&Object.prototype.hasOwnProperty.call(p,h)){var v=i?Object.getOwnPropertyDescriptor(p,h):null;v&&(v.get||v.set)?Object.defineProperty(d,h,v):d[h]=p[h]}return d.default=p,n&&n.set(p,d),d},c=function(p){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(c=function(i){return i?n:o})(p)},l=e("K+nK"),R.t0=l,R.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return R.t1=R.sent,r=(0,R.t0)(R.t1),R.t2=f,R.next=11,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(6)]).then(e.bind(null,"refC"));case 11:return R.t3=R.sent,u=(0,R.t2)(R.t3),a={type:"object",properties:{address:{title:"\u5730\u5740",type:"string",placeholder:"\u8BF7\u8F93\u5165\u60A8\u7684\u5730\u5740",required:!0},date:{title:"\u65E5\u671F",type:"range",format:"date",placeholder:["\u8BF7\u9009\u62E9\u5F00\u59CB\u65E5\u671F","\u8BF7\u9009\u62E9\u7ED3\u675F\u65E5\u671F"]},location:{title:"\u5730\u533A",type:"string",enum:["0","1"],enumNames:["\u56FD\u5185","\u56FD\u5916"]}}},m=function(){var p=(0,u.useForm)();return r.default.createElement(u.default,{schema:a,form:p})},t=m,R.abrupt("return",t);case 17:case"end":return R.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',             
  properties: {                    
   address: {                    
      title: '\u5730\u5740',               
      type: 'string',              
      placeholder: '\u8BF7\u8F93\u5165\u60A8\u7684\u5730\u5740', 
      required: true,              
    },
    // \u6DFB\u52A0\u65E5\u671F\u9009\u9879
    date: {
      title: '\u65E5\u671F',
      // range \u4EE3\u8868\u5F53\u524D\u9879\u7684\u6570\u636E\u662F\u4E00\u4E2A\u6570\u636E\uFF0C\u4E14\u957F\u5EA6\u4E3A2
      type: 'range',
      // format \u4EE3\u8868\u5F53\u524D\u9879\u7684\u683C\u5F0F\uFF0C\u8FD9\u91CC\u8BBE\u7F6E\u4E3A date\uFF0C\u5373\u65E5\u671F
      format: 'date', 
      placeholder: ['\u8BF7\u9009\u62E9\u5F00\u59CB\u65E5\u671F', '\u8BF7\u9009\u62E9\u7ED3\u675F\u65E5\u671F'],
    },
    // \u6DFB\u52A0\u5730\u533A\u9009\u9879
    location: {
      title: '\u5730\u533A',
      type: 'string',
      // enum \u548C enumNames \u4EE3\u8868\u6B64\u9879\u6709\u591A\u4E2A\u9009\u9879
      enum: ['0', '1'],
      enumNames: ['\u56FD\u5185', '\u56FD\u5916']
    },
  },
};

const Demo = () => {
  const form = useForm();
 
  return (
      <FormRender schema={schema} form={form}  />
  );
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"tutorial-demo-1"}},"tutorial-demo-2":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a,m,t,D;return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return a=function(o,n){if(!n&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var d=f(n);if(d&&d.has(o))return d.get(o);var i={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in o)if(v!=="default"&&Object.prototype.hasOwnProperty.call(o,v)){var P=h?Object.getOwnPropertyDescriptor(o,v):null;P&&(P.get||P.set)?Object.defineProperty(i,v,P):i[v]=o[v]}return i.default=o,d&&d.set(o,i),i},f=function(o){if(typeof WeakMap!="function")return null;var n=new WeakMap,d=new WeakMap;return(f=function(h){return h?d:n})(o)},l=e("K+nK"),s.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return s.t0=l,s.next=8,e.e(2).then(e.t.bind(null,"4IMT",7));case 8:return s.t1=s.sent,r=(0,s.t0)(s.t1),s.t2=l,s.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return s.t3=s.sent,u=(0,s.t2)(s.t3),s.t4=a,s.next=18,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(6)]).then(e.bind(null,"refC"));case 18:return s.t5=s.sent,c=(0,s.t4)(s.t5),m={type:"object",properties:{address:{title:"\u5730\u5740",type:"string",placeholder:"\u8BF7\u8F93\u5165\u60A8\u7684\u5730\u5740",required:!0},date:{title:"\u65E5\u671F",type:"range",format:"date",placeholder:["\u8BF7\u9009\u62E9\u5F00\u59CB\u65E5\u671F","\u8BF7\u9009\u62E9\u7ED3\u675F\u65E5\u671F"]},location:{title:"\u5730\u533A",type:"string",enum:["0","1"],enumNames:["\u56FD\u5185","\u56FD\u5916"],widget:"select"}}},t=function(){var o=(0,c.useForm)(),n=function(i){console.log("formData",i)};return u.default.createElement(u.default.Fragment,null,u.default.createElement(c.default,{schema:m,form:o,onFinish:n}),u.default.createElement(r.default,{onClick:o.submit,type:"primary"},"\u63D0\u4EA4"))},D=t,s.abrupt("return",D);case 24:case"end":return s.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',             
  properties: {                    
   address: {                    
      title: '\u5730\u5740',               
      type: 'string',              
      placeholder: '\u8BF7\u8F93\u5165\u60A8\u7684\u5730\u5740', 
      required: true,              
    },
    date: {
      title: '\u65E5\u671F',
      type: 'range',
      format: 'date',
      placeholder: ['\u8BF7\u9009\u62E9\u5F00\u59CB\u65E5\u671F', '\u8BF7\u9009\u62E9\u7ED3\u675F\u65E5\u671F'],
    },
    location: {
      title: '\u5730\u533A',
      type: 'string',
      enum: ['0', '1'],
      enumNames: ['\u56FD\u5185', '\u56FD\u5916'],
      widget: 'select',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onFinish = (formData) => {
    console.log('formData', formData);
  }
 
  return (
    <>
      <FormRender schema={schema} form={form} onFinish={onFinish} />
      <Button onClick={form.submit} type="primary">\u63D0\u4EA4</Button>
    </>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},"react-dom":{version:">=16.8.0"}},identifier:"tutorial-demo-2"}},"tutorial-demo-3":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a,m,t,D;return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return a=function(o,n){if(!n&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var d=f(n);if(d&&d.has(o))return d.get(o);var i={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in o)if(v!=="default"&&Object.prototype.hasOwnProperty.call(o,v)){var P=h?Object.getOwnPropertyDescriptor(o,v):null;P&&(P.get||P.set)?Object.defineProperty(i,v,P):i[v]=o[v]}return i.default=o,d&&d.set(o,i),i},f=function(o){if(typeof WeakMap!="function")return null;var n=new WeakMap,d=new WeakMap;return(f=function(h){return h?d:n})(o)},l=e("K+nK"),s.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return s.t0=l,s.next=8,e.e(2).then(e.t.bind(null,"4IMT",7));case 8:return s.t1=s.sent,r=(0,s.t0)(s.t1),s.t2=l,s.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return s.t3=s.sent,u=(0,s.t2)(s.t3),s.t4=a,s.next=18,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(6)]).then(e.bind(null,"refC"));case 18:return s.t5=s.sent,c=(0,s.t4)(s.t5),m={type:"object",properties:{address:{title:"\u5730\u5740",type:"string",placeholder:"\u8BF7\u8F93\u5165\u60A8\u7684\u5730\u5740",required:!0},date:{title:"\u65E5\u671F",type:"range",format:"date",placeholder:["\u8BF7\u9009\u62E9\u5F00\u59CB\u65E5\u671F","\u8BF7\u9009\u62E9\u7ED3\u675F\u65E5\u671F"]},location:{title:"\u5730\u533A",type:"string",enum:["0","1"],enumNames:["\u56FD\u5185","\u56FD\u5916"],widget:"select"}}},t=function(){var o=(0,c.useForm)();u.default.useEffect(function(){o.setValues({address:"\u5730\u5740",date:["2022-12-31","2022-12-31"],location:"0"})},[]);var n=function(i){console.log("formData",i)};return u.default.createElement(u.default.Fragment,null,u.default.createElement(c.default,{schema:m,form:o,onFinish:n}),u.default.createElement(r.default,{onClick:o.submit,type:"primary"},"\u63D0\u4EA4"))},D=t,s.abrupt("return",D);case 24:case"end":return s.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',             
  properties: {                    
   address: {                    
      title: '\u5730\u5740',               
      type: 'string',              
      placeholder: '\u8BF7\u8F93\u5165\u60A8\u7684\u5730\u5740', 
      required: true,              
    },
    date: {
      title: '\u65E5\u671F',
      type: 'range',
      format: 'date',
      placeholder: ['\u8BF7\u9009\u62E9\u5F00\u59CB\u65E5\u671F', '\u8BF7\u9009\u62E9\u7ED3\u675F\u65E5\u671F'],
    },
    location: {
      title: '\u5730\u533A',
      type: 'string',
      enum: ['0', '1'],
      enumNames: ['\u56FD\u5185', '\u56FD\u5916'],
      widget: 'select',
    },
  },
};

const Demo = () => {
  const form = useForm();

  React.useEffect(() => {
    form.setValues({
      address: '\u5730\u5740',
      date: ['2022-12-31', '2022-12-31'],
      location: '0'
    })
  }, [])

  const onFinish = (formData) => {
    console.log('formData', formData);
  }
 
  return (
    <>
      <FormRender schema={schema} form={form} onFinish={onFinish} />
      <Button onClick={form.submit} type="primary">\u63D0\u4EA4</Button>
    </>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},"react-dom":{version:">=16.8.0"}},identifier:"tutorial-demo-3"}},"display-demo":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f;return y.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return l=e("K+nK"),m.t0=l,m.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return m.t1=m.sent,r=(0,m.t0)(m.t1),m.t2=l,m.next=9,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(7)]).then(e.bind(null,"bQjt"));case 9:return m.t3=m.sent,u=(0,m.t2)(m.t3),c=function(D){return{type:"object",displayType:D,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",collapsed:!1,properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},f=function(){return r.default.createElement("div",null,r.default.createElement("h2",null,"display: row"),r.default.createElement(u.default,{schema:c("row")}),r.default.createElement("h2",null,"display: column"),r.default.createElement(u.default,{schema:c("column")}))},m.abrupt("return",f);case 14:case"end":return m.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = displayType => ({
  type: 'object',
  displayType: displayType,
  properties: {
    range1: {
      title: '\u65E5\u671F',
      type: 'range',
      format: 'date',
    },
    objectName: {
      title: '\u5BF9\u8C61',
      bind: 'obj',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      collapsed: false,
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          required: true,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        },
      },
    },
  },
});

export default () => (
  <div>
    <h2>display: row</h2>
    <Form schema={schema('row')} />
    <h2>display: column</h2>
    <Form schema={schema('column')} />
  </div>
);`},"demo/display.js":{import:"../demo/display",content:B}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f;return y.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return l=e("K+nK"),m.t0=l,m.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return m.t1=m.sent,r=(0,m.t0)(m.t1),m.t2=l,m.next=9,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(7)]).then(e.bind(null,"bQjt"));case 9:return m.t3=m.sent,u=(0,m.t2)(m.t3),c={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},f=function(){return r.default.createElement(u.default,{readOnly:!0,schema:c})},m.abrupt("return",f);case 14:case"end":return m.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    aa: {
      title: '\u5BF9\u8C61',
      type: 'object',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          default: 'hello world',
          required: true,
        },
        check: {
          title: 'box',
          type: 'boolean',
          default: true,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          default: 'a',
        },
      },
    },
  },
};

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:B}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f;return y.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return l=e("K+nK"),m.t0=l,m.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return m.t1=m.sent,r=(0,m.t0)(m.t1),m.t2=l,m.next=9,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(7)]).then(e.bind(null,"bQjt"));case 9:return m.t3=m.sent,u=(0,m.t2)(m.t3),c={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},f=function(){return r.default.createElement(u.default,{labelWidth:"200",schema:c})},m.abrupt("return",f);case 14:case"end":return m.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    aa: {
      title: '\u5BF9\u8C61',
      type: 'object',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          default: 'hello world',
          required: true,
          width: '50%',
        },
        check: {
          title: 'box',
          type: 'boolean',
          default: true,
          width: '50%',
          labelWidth: 6,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          default: 'a',
        },
      },
    },
  },
};

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:B}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l=e("K+nK"),t.t0=l,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,r=(0,t.t0)(t.t1),t.t2=l,t.next=9,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(7)]).then(e.bind(null,"bQjt"));case 9:return t.t3=t.sent,u=(0,t.t2)(t.t3),c={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},f=function(){return r.default.createElement(u.default,{schema:c})},a=f,t.abrupt("return",a);case 15:case"end":return t.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      // widget: 'cardList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          obj: {
            title: '\u5BF9\u8C61',
            type: 'object',
            properties: {
              input1: {
                title: '\u7B80\u5355\u8F93\u5165\u6846',
                type: 'string',
                required: true,
              },
              select1: {
                title: '\u5355\u9009',
                type: 'string',
                enum: ['a', 'b', 'c'],
                enumNames: ['\u65E9', '\u4E2D', '\u665A'],
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:B}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l=e("K+nK"),t.t0=l,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,r=(0,t.t0)(t.t1),t.t2=l,t.next=9,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(7)]).then(e.bind(null,"bQjt"));case 9:return t.t3=t.sent,u=(0,t.t2)(t.t3),c={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"simpleList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},f=function(){return r.default.createElement(u.default,{schema:c})},a=f,t.abrupt("return",a);case 15:case"end":return t.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'simpleList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:B}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l=e("K+nK"),t.t0=l,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,r=(0,t.t0)(t.t1),t.t2=l,t.next=9,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(7)]).then(e.bind(null,"bQjt"));case 9:return t.t3=t.sent,u=(0,t.t2)(t.t3),c={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"tableList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},f=function(){return r.default.createElement(u.default,{schema:c})},a=f,t.abrupt("return",a);case 15:case"end":return t.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'tableList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          input2: {
            title: '\u7B80\u5355\u8F93\u5165\u68462',
            type: 'string',
          },
          input3: {
            title: '\u7B80\u5355\u8F93\u5165\u68463',
            type: 'string',
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
            widget: 'select',
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:B}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l=e("K+nK"),t.t0=l,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,r=(0,t.t0)(t.t1),t.t2=l,t.next=9,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(7)]).then(e.bind(null,"bQjt"));case 9:return t.t3=t.sent,u=(0,t.t2)(t.t3),c={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"drawerList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"simpleList",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},f=function(){return r.default.createElement(u.default,{schema:c})},a=f,t.abrupt("return",a);case 15:case"end":return t.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'drawerList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          listName2: {
            title: '\u5BF9\u8C61\u6570\u7EC4',
            description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
            type: 'array',
            widget: 'simpleList',
            props: {
              hideMove: true,
            },
            items: {
              type: 'object',
              properties: {
                input1: {
                  title: '\u7B80\u5355\u8F93\u5165\u6846',
                  type: 'string',
                  required: true,
                },
                select1: {
                  title: '\u5355\u9009',
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumNames: ['\u65E9', '\u4E2D', '\u665A'],
                },
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:B}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l=e("K+nK"),t.t0=l,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,r=(0,t.t0)(t.t1),t.t2=l,t.next=9,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(7)]).then(e.bind(null,"bQjt"));case 9:return t.t3=t.sent,u=(0,t.t2)(t.t3),c={type:"object",displayType:"row",properties:{objectName:{title:"\u9ED8\u8BA4\u6837\u5F0F",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",collapsed:!0,properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},objectName2:{title:"\u65E0\u8FB9\u6846\u6837\u5F0F",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",collapsed:!0,theme:"collapse:pure",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},objectName3:{title:"\u5E7D\u7075\u6A21\u5F0F",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",collapsed:!0,theme:"collapse:ghost",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}},f=function(){return r.default.createElement(u.default,{schema:c})},a=f,t.abrupt("return",a);case 15:case"end":return t.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    objectName: {
      title: '\u9ED8\u8BA4\u6837\u5F0F',
      bind: 'obj',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      collapsed: true,
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          required: true,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        },
      },
    },
    objectName2: {
      title: '\u65E0\u8FB9\u6846\u6837\u5F0F',
      bind: 'obj',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      collapsed: true,
      theme: 'collapse:pure',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          required: true,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        },
      },
    },
    objectName3: {
      title: '\u5E7D\u7075\u6A21\u5F0F',
      bind: 'obj',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      collapsed: true,
      theme: 'collapse:ghost',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          required: true,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:B}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"display-demo-8":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l=e("K+nK"),t.t0=l,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,r=(0,t.t0)(t.t1),t.t2=l,t.next=9,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(7)]).then(e.bind(null,"bQjt"));case 9:return t.t3=t.sent,u=(0,t.t2)(t.t3),c={type:"object",displayType:"row",properties:{objectName:{title:"\u5361\u7247\u4E3B\u9898",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",theme:"card",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,width:"30%"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],width:"30%"},date:{title:"\u65F6\u95F4\u9009\u62E9",type:"string",format:"date",width:"30%"}}},objectName2:{title:"\u5361\u7247\u4E3B\u9898",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",theme:"card",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,width:"30%"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],width:"30%"},date:{title:"\u65F6\u95F4\u9009\u62E9",type:"string",format:"date",width:"30%"}}}}},f=function(){return r.default.createElement("div",null,r.default.createElement(u.default,{schema:c}))},a=f,t.abrupt("return",a);case 15:case"end":return t.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    objectName: {
      title: '\u5361\u7247\u4E3B\u9898',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      theme: 'card',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          required: true,
          width: '30%',
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          width: '30%',
        },
        date: {
          title: '\u65F6\u95F4\u9009\u62E9',
          type: 'string',
          format: 'date',
          width: '30%',
        },
      },
    },
    objectName2: {
      title: '\u5361\u7247\u4E3B\u9898',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      theme: 'card',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          required: true,
          width: '30%',
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          width: '30%',
        },
        date: {
          title: '\u65F6\u95F4\u9009\u62E9',
          type: 'string',
          format: 'date',
          width: '30%',
        },
      },
    },
  },
};

const Demo = () => {
  return (
    <div>
      <Form schema={schema} />
    </div>
  );
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:B}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-8"}},"display-demo-9":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l=e("K+nK"),t.t0=l,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,r=(0,t.t0)(t.t1),t.t2=l,t.next=9,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(7)]).then(e.bind(null,"bQjt"));case 9:return t.t3=t.sent,u=(0,t.t2)(t.t3),c={type:"object",displayType:"row",properties:{objectName:{title:"\u5E73\u94FA\u4E3B\u9898",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",theme:"tile",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,width:"30%"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],width:"30%"},date:{title:"\u65F6\u95F4\u9009\u62E9",type:"string",format:"date",width:"30%"}}},objectName2:{title:"\u5E73\u94FA\u4E3B\u9898",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",theme:"tile",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,width:"30%"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],width:"30%"},date:{title:"\u65F6\u95F4\u9009\u62E9",type:"string",format:"date",width:"30%"}}}}},f=function(){return r.default.createElement("div",null,r.default.createElement(u.default,{schema:c}))},a=f,t.abrupt("return",a);case 15:case"end":return t.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    objectName: {
      title: '\u5E73\u94FA\u4E3B\u9898',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      theme: 'tile',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          required: true,
          width: '30%',
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          width: '30%',
        },
        date: {
          title: '\u65F6\u95F4\u9009\u62E9',
          type: 'string',
          format: 'date',
          width: '30%',
        },
      },
    },
    objectName2: {
      title: '\u5E73\u94FA\u4E3B\u9898',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      theme: 'tile',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          required: true,
          width: '30%',
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          width: '30%',
        },
        date: {
          title: '\u65F6\u95F4\u9009\u62E9',
          type: 'string',
          format: 'date',
          width: '30%',
        },
      },
    },
  },
};

const Demo = () => {
  return (
    <div>
      <Form schema={schema} />
    </div>
  );
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:B}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-9"}},"form-methods-demo":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a,m,t,D,R,s,p;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return R=function(i,h){if(!h&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var v=D(h);if(v&&v.has(i))return v.get(i);var P={},j=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var F in i)if(F!=="default"&&Object.prototype.hasOwnProperty.call(i,F)){var N=j?Object.getOwnPropertyDescriptor(i,F):null;N&&(N.get||N.set)?Object.defineProperty(P,F,N):P[F]=i[F]}return P.default=i,v&&v.set(i,P),P},D=function(i){if(typeof WeakMap!="function")return null;var h=new WeakMap,v=new WeakMap;return(D=function(j){return j?v:h})(i)},l=e("K+nK"),n.next=5,e.e(16).then(e.t.bind(null,"lfLe",7));case 5:return n.t0=l,n.next=8,e.e(14).then(e.t.bind(null,"Cp9S",7));case 8:return n.t1=n.sent,r=(0,n.t0)(n.t1),n.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return n.t2=l,n.next=15,e.e(2).then(e.t.bind(null,"4IMT",7));case 15:return n.t3=n.sent,u=(0,n.t2)(n.t3),n.next=19,e.e(10).then(e.t.bind(null,"tL+A",7));case 19:return n.t4=l,n.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return n.t5=n.sent,c=(0,n.t4)(n.t5),n.t6=l,n.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return n.t7=n.sent,f=(0,n.t6)(n.t7),n.t8=R,n.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return n.t9=n.sent,a=(0,n.t8)(n.t9),n.t10=R,n.next=37,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(6)]).then(e.bind(null,"refC"));case 37:return n.t11=n.sent,m=(0,n.t10)(n.t11),n.next=41,e.e(11).then(e.bind(null,"OH0R"));case 41:return t=n.sent,s=function(){var i=(0,m.useForm)(),h=(0,a.useState)({}),v=(0,f.default)(h,2),P=v[0],j=v[1],F=function(){(0,t.fakeApi)("xxx/getForm").then(function(T){i.setValues({input1:"hello world",select1:"c"})})};(0,a.useEffect)(function(){(0,t.delay)(1e3).then(function(w){j({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var N=function(T,A){A.length>0?c.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(A.map(function(M){return M.name}))):(0,t.fakeApi)("xxx/submit",T).then(function(M){return c.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return a.default.createElement("div",{style:{width:"400px"}},a.default.createElement(m.default,{form:i,schema:P,onFinish:N}),a.default.createElement(r.default,null,a.default.createElement(u.default,{onClick:F},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),a.default.createElement(u.default,{type:"primary",onClick:i.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},p=s,n.abrupt("return",p);case 45:case"end":return n.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
import { Button, Space, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi, delay } from './utils';

const Demo = () => {
  const form = useForm();
  const [schema, setSchema] = useState({});

  const getRemoteData = () => {
    fakeApi('xxx/getForm').then(_ => {
      form.setValues({ input1: 'hello world', select1: 'c' });
    });
  };

  useEffect(() => {
    // \u5F02\u6B65\u52A0\u8F7D\u8868\u5355
    delay(1000).then(_ => {
      setSchema({
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
        },
      });
    });
  }, []);

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Space>
        <Button onClick={getRemoteData}>\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E</Button>
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4\uFF08\u89C1console\uFF09
        </Button>
      </Space>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:E}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a,m,t,D,R,s,p;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return D=function(i,h){if(!h&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var v=t(h);if(v&&v.has(i))return v.get(i);var P={},j=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var F in i)if(F!=="default"&&Object.prototype.hasOwnProperty.call(i,F)){var N=j?Object.getOwnPropertyDescriptor(i,F):null;N&&(N.get||N.set)?Object.defineProperty(P,F,N):P[F]=i[F]}return P.default=i,v&&v.set(i,P),P},t=function(i){if(typeof WeakMap!="function")return null;var h=new WeakMap,v=new WeakMap;return(t=function(j){return j?v:h})(i)},l=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=l,n.next=8,e.e(2).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,r=(0,n.t0)(n.t1),n.t2=l,n.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return n.t3=n.sent,u=(0,n.t2)(n.t3),n.next=17,e.e(10).then(e.t.bind(null,"tL+A",7));case 17:return n.t4=l,n.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return n.t5=n.sent,c=(0,n.t4)(n.t5),n.t6=l,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,f=(0,n.t6)(n.t7),n.t8=D,n.next=30,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(6)]).then(e.bind(null,"refC"));case 30:return n.t9=n.sent,a=(0,n.t8)(n.t9),n.next=34,e.e(11).then(e.bind(null,"OH0R"));case 34:return m=n.sent,R={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},s=function(){var i=(0,a.useForm)(),h=function(j,F){F.length>0?c.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(F.map(function(N){return N.name}))):(0,m.fakeApi)("xxx/submit",j).then(function(N){return c.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},v=function(j){var F=j.data,N=j.errors,w=j.schema,T=(0,u.default)(j,["data","errors","schema"]);return(0,m.fakeApi)("xxx/validation").then(function(A){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return f.default.createElement("div",{style:{width:"400px"}},f.default.createElement(a.default,{form:i,schema:R,beforeFinish:v,onFinish:h}),f.default.createElement(r.default,{type:"primary",onClick:i.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},p=s,n.abrupt("return",p);case 39:case"end":return n.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  // \u670D\u52A1\u7AEF\u6821\u9A8C\u5728\u8FD9\u91CC\u505A
  const beforeFinish = ({ data, errors, schema, ...rest }) => {
    return fakeApi('xxx/validation').then(_ => {
      return { name: 'select1', error: ['\u5916\u90E8\u6821\u9A8C\u9519\u8BEF'] };
    });
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender
        form={form}
        schema={schema}
        beforeFinish={beforeFinish}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:E}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a,m,t,D,R,s,p;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return D=function(i,h){if(!h&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var v=t(h);if(v&&v.has(i))return v.get(i);var P={},j=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var F in i)if(F!=="default"&&Object.prototype.hasOwnProperty.call(i,F)){var N=j?Object.getOwnPropertyDescriptor(i,F):null;N&&(N.get||N.set)?Object.defineProperty(P,F,N):P[F]=i[F]}return P.default=i,v&&v.set(i,P),P},t=function(i){if(typeof WeakMap!="function")return null;var h=new WeakMap,v=new WeakMap;return(t=function(j){return j?v:h})(i)},l=e("K+nK"),n.next=5,e.e(16).then(e.t.bind(null,"lfLe",7));case 5:return n.t0=l,n.next=8,e.e(14).then(e.t.bind(null,"Cp9S",7));case 8:return n.t1=n.sent,r=(0,n.t0)(n.t1),n.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return n.t2=l,n.next=15,e.e(2).then(e.t.bind(null,"4IMT",7));case 15:return n.t3=n.sent,u=(0,n.t2)(n.t3),n.next=19,e.e(10).then(e.t.bind(null,"tL+A",7));case 19:return n.t4=l,n.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return n.t5=n.sent,c=(0,n.t4)(n.t5),n.t6=l,n.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return n.t7=n.sent,f=(0,n.t6)(n.t7),n.t8=D,n.next=32,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(6)]).then(e.bind(null,"refC"));case 32:return n.t9=n.sent,a=(0,n.t8)(n.t9),n.next=36,e.e(11).then(e.bind(null,"OH0R"));case 36:return m=n.sent,R={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},s=function(){var i=(0,a.useForm)(),h=function(j,F){F.length>0?c.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(F.map(function(N){return N.name}))):(0,m.fakeApi)("xxx/submit",j).then(function(N){return c.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},v=function(){(0,m.fakeApi)("xxx/getForm").then(function(j){i.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return f.default.createElement("div",{style:{width:"400px"}},f.default.createElement(a.default,{form:i,schema:R,onFinish:h}),f.default.createElement(r.default,null,f.default.createElement(u.default,{onClick:v},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),f.default.createElement(u.default,{type:"primary",onClick:i.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},p=s,n.abrupt("return",p);case 41:case"end":return n.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button, message, Space } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    dateRange: {
      bind: ['startDate', 'endDate'],
      title: '\u65E5\u671F\u8303\u56F4',
      type: 'range',
      format: 'date',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  const getRemoteData = () => {
    fakeApi('xxx/getForm').then(_ => {
      form.setValues({ startDate: '2020-04-04', endDate: '2020-04-24' });
    });
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Space>
        <Button onClick={getRemoteData}>\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E</Button>
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4\uFF08\u89C1console\uFF09
        </Button>
      </Space>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:E}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a,m,t,D,R,s;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return t=function(d,i){if(!i&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var h=m(i);if(h&&h.has(d))return h.get(d);var v={},P=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var j in d)if(j!=="default"&&Object.prototype.hasOwnProperty.call(d,j)){var F=P?Object.getOwnPropertyDescriptor(d,j):null;F&&(F.get||F.set)?Object.defineProperty(v,j,F):v[j]=d[j]}return v.default=d,h&&h.set(d,v),v},m=function(d){if(typeof WeakMap!="function")return null;var i=new WeakMap,h=new WeakMap;return(m=function(P){return P?h:i})(d)},l=e("K+nK"),o.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return o.t0=l,o.next=8,e.e(2).then(e.t.bind(null,"4IMT",7));case 8:return o.t1=o.sent,r=(0,o.t0)(o.t1),o.next=12,e.e(10).then(e.t.bind(null,"tL+A",7));case 12:return o.t2=l,o.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return o.t3=o.sent,u=(0,o.t2)(o.t3),o.t4=t,o.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return o.t5=o.sent,c=(0,o.t4)(o.t5),o.t6=t,o.next=25,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(6)]).then(e.bind(null,"refC"));case 25:return o.t7=o.sent,f=(0,o.t6)(o.t7),o.next=29,e.e(11).then(e.bind(null,"OH0R"));case 29:return a=o.sent,D={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},R=function(){var d=(0,f.useForm)(),i=function(){d.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},h=function(P,j){j.length>0?u.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(j.map(function(F){return F.name}))):u.default.info(JSON.stringify(P))};return c.default.createElement("div",{style:{width:"400px"}},c.default.createElement(f.default,{form:d,schema:D,onMount:i,onFinish:h}),c.default.createElement(r.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},s=R,o.abrupt("return",s);case 34:case"end":return o.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    obj1: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          widget: 'select',
        },
      },
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onMount = () => {
    form.setSchemaByPath('obj1.select1', {
      enum: ['east', 'south', 'west', 'north'],
      enumNames: ['\u4E1C', '\u5357', '\u897F', '\u5317'],
    });
  };

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      message.info(JSON.stringify(data));
    }
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender
        form={form}
        schema={schema}
        onMount={onMount}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:E}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a,m,t;return y.a.wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return f=function(p,o){if(!o&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var n=c(o);if(n&&n.has(p))return n.get(p);var d={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in p)if(h!=="default"&&Object.prototype.hasOwnProperty.call(p,h)){var v=i?Object.getOwnPropertyDescriptor(p,h):null;v&&(v.get||v.set)?Object.defineProperty(d,h,v):d[h]=p[h]}return d.default=p,n&&n.set(p,d),d},c=function(p){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(c=function(i){return i?n:o})(p)},l=e("K+nK"),R.t0=l,R.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return R.t1=R.sent,r=(0,R.t0)(R.t1),R.t2=f,R.next=11,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(6)]).then(e.bind(null,"refC"));case 11:return R.t3=R.sent,u=(0,R.t2)(R.t3),a={type:"object",properties:{checkbox1:{title:"\u5C55\u793A\u66F4\u591A\u5185\u5BB9",type:"boolean"},select1:{title:"\u8BF7\u5047\u539F\u56E0",type:"string",enum:["a","b","c"],enumNames:["\u75C5\u5047","\u6709\u4E8B","\u5176\u5B83 (\u9700\u6CE8\u660E\u5177\u4F53\u539F\u56E0)"],hidden:"{{formData.checkbox1 !== true}}",widget:"radio"},input1:{title:"\u5177\u4F53\u539F\u56E0",type:"string",format:"textarea",hidden:'{{rootValue.checkbox1 !== true || formData.select1 !== "c"}}'}}},m=function(){var p=(0,u.useForm)();return r.default.createElement(u.default,{form:p,schema:a})},t=m,R.abrupt("return",t);case 17:case"end":return R.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    checkbox1: {
      title: '\u5C55\u793A\u66F4\u591A\u5185\u5BB9',
      type: 'boolean',
    },
    select1: {
      title: '\u8BF7\u5047\u539F\u56E0',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u75C5\u5047', '\u6709\u4E8B', '\u5176\u5B83 (\u9700\u6CE8\u660E\u5177\u4F53\u539F\u56E0)'],
      hidden: '{{formData.checkbox1 !== true}}',
      widget: 'radio',
    },
    input1: {
      title: '\u5177\u4F53\u539F\u56E0',
      type: 'string',
      format: 'textarea',
      hidden: '{{rootValue.checkbox1 !== true || formData.select1 !== "c"}}',
    },
  },
};

const Demo1 = () => {
  const form = useForm();
  return <FormRender form={form} schema={schema} />;
};

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f;return y.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return l=e("K+nK"),m.t0=l,m.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return m.t1=m.sent,r=(0,m.t0)(m.t1),m.t2=l,m.next=9,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(12)]).then(e.bind(null,"c2mQ"));case 9:return m.t3=m.sent,u=(0,m.t2)(m.t3),m.next=13,e.e(18).then(e.bind(null,"8iYR"));case 13:return c=m.sent,f=function(){return r.default.createElement(u.default,{schema:c.expression})},m.abrupt("return",f);case 16:case"end":return m.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:$},"json/schema.js":{import:"../json/schema",content:V}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a,m,t;return y.a.wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return c=function(p,o){if(!o&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var n=u(o);if(n&&n.has(p))return n.get(p);var d={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in p)if(h!=="default"&&Object.prototype.hasOwnProperty.call(p,h)){var v=i?Object.getOwnPropertyDescriptor(p,h):null;v&&(v.get||v.set)?Object.defineProperty(d,h,v):d[h]=p[h]}return d.default=p,n&&n.set(p,d),d},u=function(p){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(u=function(i){return i?n:o})(p)},R.t0=c,R.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return R.t1=R.sent,l=(0,R.t0)(R.t1),R.t2=c,R.next=10,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(6)]).then(e.bind(null,"refC"));case 10:return R.t3=R.sent,r=(0,R.t2)(R.t3),f=function(p){return new Promise(function(o){return setTimeout(o,p)})},a={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u9009\u62E9\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"radio"}}},m=function(){var p=(0,r.useForm)(),o=function(){p.setValues({input1:"hello world"}),f(3e3).then(function(d){p.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return l.default.createElement(r.default,{form:p,schema:a,onMount:o})},t=m,R.abrupt("return",t);case 17:case"end":return R.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const delay = ms => new Promise(res => setTimeout(res, ms));

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u9009\u62E9\u6846',
      description: '\u52A0\u8F7D\u4E2D...',
      type: 'string',
      enum: [],
      widget: 'radio',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onMount = () => {
    form.setValues({ input1: 'hello world' });

    delay(3000).then(_ => {
      form.setSchemaByPath('select1', {
        description: '',
        enum: ['a', 'b', 'c'],
        enumNames: ['\u65E9', '\u4E2D', '\u665A'],
      });
    });
  };

  return <FormRender form={form} schema={schema} onMount={onMount} />;
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l=e("K+nK"),t.t0=l,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,r=(0,t.t0)(t.t1),t.t2=l,t.next=9,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(7)]).then(e.bind(null,"bQjt"));case 9:return t.t3=t.sent,u=(0,t.t2)(t.t3),c={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,default:"\u5361\u7247\u5217\u8868"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},f=function(){return r.default.createElement(u.default,{schema:c})},a=f,t.abrupt("return",a);case 15:case"end":return t.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      // widget: 'cardList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
            default: 'a',
          },
          obj: {
            title: '\u5BF9\u8C61',
            type: 'object',
            properties: {
              input1: {
                title: '\u7B80\u5355\u8F93\u5165\u6846',
                type: 'string',
                required: true,
                default: '\u5361\u7247\u5217\u8868',
              },
              select1: {
                title: '\u5355\u9009',
                type: 'string',
                enum: ['a', 'b', 'c'],
                enumNames: ['\u65E9', '\u4E2D', '\u665A'],
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:B}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l=e("K+nK"),t.t0=l,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,r=(0,t.t0)(t.t1),t.t2=l,t.next=9,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(7)]).then(e.bind(null,"bQjt"));case 9:return t.t3=t.sent,u=(0,t.t2)(t.t3),c={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"simpleList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},f=function(){return r.default.createElement(u.default,{schema:c})},a=f,t.abrupt("return",a);case 15:case"end":return t.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'simpleList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:B}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l=e("K+nK"),t.t0=l,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,r=(0,t.t0)(t.t1),t.t2=l,t.next=9,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(7)]).then(e.bind(null,"bQjt"));case 9:return t.t3=t.sent,u=(0,t.t2)(t.t3),c={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"tableList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},f=function(){return r.default.createElement(u.default,{schema:c})},a=f,t.abrupt("return",a);case 15:case"end":return t.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'tableList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          input2: {
            title: '\u7B80\u5355\u8F93\u5165\u68462',
            type: 'string',
          },
          input3: {
            title: '\u7B80\u5355\u8F93\u5165\u68463',
            type: 'string',
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
            widget: 'select',
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:B}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l=e("K+nK"),t.t0=l,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,r=(0,t.t0)(t.t1),t.t2=l,t.next=9,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(7)]).then(e.bind(null,"bQjt"));case 9:return t.t3=t.sent,u=(0,t.t2)(t.t3),c={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"drawerList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"simpleList",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},f=function(){return r.default.createElement(u.default,{schema:c})},a=f,t.abrupt("return",a);case 15:case"end":return t.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'drawerList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          listName2: {
            title: '\u5BF9\u8C61\u6570\u7EC4',
            description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
            type: 'array',
            widget: 'simpleList',
            props: {
              hideMove: true,
            },
            items: {
              type: 'object',
              properties: {
                input1: {
                  title: '\u7B80\u5355\u8F93\u5165\u6846',
                  type: 'string',
                  required: true,
                },
                select1: {
                  title: '\u5355\u9009',
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumNames: ['\u65E9', '\u4E2D', '\u665A'],
                },
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:B}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l=e("K+nK"),t.t0=l,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,r=(0,t.t0)(t.t1),t.t2=l,t.next=9,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(7)]).then(e.bind(null,"bQjt"));case 9:return t.t3=t.sent,u=(0,t.t2)(t.t3),c={type:"object",properties:{tabsName1:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"tabList",props:{type:"editable-card",tabName:"\u9879\u76EE",draggable:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName1:{title:"\u5BF9\u8C61\u6570\u7EC4",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},f=function(){return r.default.createElement(u.default,{schema:c})},a=f,t.abrupt("return",a);case 15:case"end":return t.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    tabsName1: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'tabList',
      props: {
        type: 'editable-card',
        tabName: '\u9879\u76EE', // \u9009\u9879\u5361\u663E\u793A\u6587\u5B57\uFF0C\u5BF9\u5E94antd\u4E2DTabs\u7684tab\u5C5E\u6027\u3002 \u8FD9\u91CC\u4E5F\u53EF\u4EE5\u662F\u6570\u7EC4
        draggable: true, //  \u662F\u5426\u53EF\u62D6\u62FD
      },
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          listName1: {
            title: '\u5BF9\u8C61\u6570\u7EC4',
            type: 'array',
            widget: 'list1',
            props: {
              hideMove: true,
            },
            items: {
              type: 'object',
              properties: {
                input1: {
                  title: '\u7B80\u5355\u8F93\u5165\u6846',
                  type: 'string',
                  required: true,
                },
                select1: {
                  title: '\u5355\u9009',
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumNames: ['\u65E9', '\u4E2D', '\u665A'],
                },
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => <Form schema={schema} />;
export default Demo;`},"demo/display.js":{import:"../demo/display",content:B}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"listDisplay-demo-5":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l=e("K+nK"),t.t0=l,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,r=(0,t.t0)(t.t1),t.t2=l,t.next=9,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(7)]).then(e.bind(null,"bQjt"));case 9:return t.t3=t.sent,u=(0,t.t2)(t.t3),c={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"virtualList",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},f=function(){return r.default.createElement(u.default,{schema:c})},a=f,t.abrupt("return",a);case 15:case"end":return t.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'virtualList',
      itemProps: {
        buttons: [
          {
            callback: 'hello',
            text: '\u590D\u5236',
          },
        ],
      },
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          input2: {
            title: '\u7B80\u5355\u8F93\u5165\u68462',
            type: 'string',
          },
          input3: {
            title: '\u7B80\u5355\u8F93\u5165\u68463',
            type: 'string',
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
            widget: 'select',
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:B}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-5"}},"mapping-demo":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a,m,t,D,R;return y.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return a=function(n,d){if(!d&&n&&n.__esModule)return n;if(n===null||typeof n!="object"&&typeof n!="function")return{default:n};var i=f(d);if(i&&i.has(n))return i.get(n);var h={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var P in n)if(P!=="default"&&Object.prototype.hasOwnProperty.call(n,P)){var j=v?Object.getOwnPropertyDescriptor(n,P):null;j&&(j.get||j.set)?Object.defineProperty(h,P,j):h[P]=n[P]}return h.default=n,i&&i.set(n,h),h},f=function(n){if(typeof WeakMap!="function")return null;var d=new WeakMap,i=new WeakMap;return(f=function(v){return v?i:d})(n)},l=e("K+nK"),p.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return p.t0=l,p.next=8,e.e(2).then(e.t.bind(null,"4IMT",7));case 8:return p.t1=p.sent,r=(0,p.t0)(p.t1),p.t2=l,p.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return p.t3=p.sent,u=(0,p.t2)(p.t3),p.t4=a,p.next=18,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(6)]).then(e.bind(null,"refC"));case 18:return p.t5=p.sent,c=(0,p.t4)(p.t5),m=function(n){var d=n.schema;return d.$id==="#"?u.default.createElement("div",null,n.children):u.default.createElement("div",null,"my custom object:",n.children)},t={type:"object",properties:{object2:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u8F93\u5165\u6846",type:"string"}}}},labelWidth:120,displayType:"row"},D=function(){var n=(0,c.useForm)(),d=function(h,v){console.log("formData:",h,"errors",v)};return u.default.createElement("div",null,u.default.createElement(c.default,{form:n,schema:t,onFinish:d,mapping:{object:"CustomComA"},widgets:{CustomComA:m}}),u.default.createElement(r.default,{type:"primary",onClick:n.submit},"\u63D0\u4EA4"))},R=D,p.abrupt("return",R);case 25:case"end":return p.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const CustomComA = props => {
  const { schema } = props;
  if (schema.$id === '#') {
    return <div>{props.children}</div>;
  }
  return (
    <div>
      my custom object:
      {props.children}
    </div>
  );
};

const schema = {
  type: 'object',
  properties: {
    object2: {
      title: '\u5BF9\u8C61',
      type: 'object',
      properties: {
        input1: {
          title: '\u8F93\u5165\u6846',
          type: 'string',
        },
      },
    },
  },
  labelWidth: 120,
  displayType: 'row',
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errors) => {
    console.log('formData:', formData, 'errors', errors);
  };
  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        onFinish={onFinish}
        mapping={{ object: 'CustomComA' }}
        widgets={{ CustomComA }}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},"react-dom":{version:">=16.8.0"}},identifier:"mapping-demo"}},"measure-demo":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a,m,t,D;return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return m=function(o,n){if(!n&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var d=a(n);if(d&&d.has(o))return d.get(o);var i={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in o)if(v!=="default"&&Object.prototype.hasOwnProperty.call(o,v)){var P=h?Object.getOwnPropertyDescriptor(o,v):null;P&&(P.get||P.set)?Object.defineProperty(i,v,P):i[v]=o[v]}return i.default=o,d&&d.set(o,i),i},a=function(o){if(typeof WeakMap!="function")return null;var n=new WeakMap,d=new WeakMap;return(a=function(h){return h?d:n})(o)},l=e("K+nK"),s.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return s.t0=l,s.next=8,e.e(2).then(e.t.bind(null,"4IMT",7));case 8:return s.t1=s.sent,r=(0,s.t0)(s.t1),s.next=12,e.e(10).then(e.t.bind(null,"tL+A",7));case 12:return s.t2=l,s.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return s.t3=s.sent,u=(0,s.t2)(s.t3),s.t4=m,s.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return s.t5=s.sent,c=(0,s.t4)(s.t5),s.t6=m,s.next=25,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(6)]).then(e.bind(null,"refC"));case 25:return s.t7=s.sent,f=(0,s.t6)(s.t7),t=function(){var o=(0,f.useForm)({logOnMount:function(h){console.log("onMount",h)},logOnSubmit:function(h){console.log("onSubmit",h)}}),n={type:"object",properties:{input1:{title:"\u8F93\u5165\u6846",required:!0,type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u5DE6","\u4E2D","\u53F3"],widget:"radio"}}},d=function(h,v){v.length>0?u.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(v.map(function(P){return P.name}))):u.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")};return c.default.createElement("div",null,c.default.createElement(f.default,{id:"my-demo-form",form:o,schema:n,onFinish:d}),c.default.createElement(r.default,{type:"primary",onClick:o.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},D=t,s.abrupt("return",D);case 30:case"end":return s.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button, Space, message } from 'antd';
import FormRender, { useForm } from 'form-render';

const Demo = () => {
  const form = useForm({
    logOnMount: info => {
      console.log('onMount', info);
    },
    logOnSubmit: info => {
      console.log('onSubmit', info);
    },
  });

  const schema = {
    type: 'object',
    properties: {
      input1: {
        title: '\u8F93\u5165\u6846',
        required: true,
        type: 'string',
      },
      select1: {
        title: '\u5355\u9009',
        type: 'string',
        enum: ['a', 'b', 'c'],
        enumNames: ['\u5DE6', '\u4E2D', '\u53F3'],
        widget: 'radio',
      },
    },
  };

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      message.success('\u63D0\u4EA4\u6210\u529F\uFF01');
    }
  };

  return (
    <div>
      <FormRender
        id="my-demo-form"
        form={form}
        schema={schema}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"measure-demo"}},"watch-demo":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a,m;return y.a.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return c=function(s,p){if(!p&&s&&s.__esModule)return s;if(s===null||typeof s!="object"&&typeof s!="function")return{default:s};var o=u(p);if(o&&o.has(s))return o.get(s);var n={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in s)if(i!=="default"&&Object.prototype.hasOwnProperty.call(s,i)){var h=d?Object.getOwnPropertyDescriptor(s,i):null;h&&(h.get||h.set)?Object.defineProperty(n,i,h):n[i]=s[i]}return n.default=s,o&&o.set(s,n),n},u=function(s){if(typeof WeakMap!="function")return null;var p=new WeakMap,o=new WeakMap;return(u=function(d){return d?o:p})(s)},D.t0=c,D.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return D.t1=D.sent,l=(0,D.t0)(D.t1),D.t2=c,D.next=10,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(6)]).then(e.bind(null,"refC"));case 10:return D.t3=D.sent,r=(0,D.t2)(D.t3),f={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},a=function(){var s=(0,r.useForm)(),p={"#":function(n){console.log("\u8868\u5355\u7684\u5B9E\u65F6\u6570\u636E\u4E3A\uFF1A",n)},input1:function(n){s.setValueByPath("input2",n)}};return l.default.createElement(r.default,{form:s,schema:f,watch:p})},m=a,D.abrupt("return",m);case 16:case"end":return D.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
      placeholder: '\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165',
    },
    input2: {
      title: '\u7B80\u5355\u8F93\u5165\u68462',
      type: 'string',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const watch = {
    // # \u4E3A\u5168\u5C40
    '#': val => {
      console.log('\u8868\u5355\u7684\u5B9E\u65F6\u6570\u636E\u4E3A\uFF1A', val);
    },
    input1: val => {
      form.setValueByPath('input2', val);
    },
  };

  return <FormRender form={form} schema={schema} watch={watch} />;
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a,m,t,D;return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return a=function(o,n){if(!n&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var d=f(n);if(d&&d.has(o))return d.get(o);var i={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in o)if(v!=="default"&&Object.prototype.hasOwnProperty.call(o,v)){var P=h?Object.getOwnPropertyDescriptor(o,v):null;P&&(P.get||P.set)?Object.defineProperty(i,v,P):i[v]=o[v]}return i.default=o,d&&d.set(o,i),i},f=function(o){if(typeof WeakMap!="function")return null;var n=new WeakMap,d=new WeakMap;return(f=function(h){return h?d:n})(o)},l=e("K+nK"),s.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return s.t0=l,s.next=8,e.e(2).then(e.t.bind(null,"4IMT",7));case 8:return s.t1=s.sent,r=(0,s.t0)(s.t1),s.t2=a,s.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return s.t3=s.sent,u=(0,s.t2)(s.t3),s.t4=a,s.next=18,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(6)]).then(e.bind(null,"refC"));case 18:return s.t5=s.sent,c=(0,s.t4)(s.t5),m={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},t=function(){var o=(0,c.useForm)(),n=function(h,v){v.length>0?alert("errorFields:"+JSON.stringify(v)):alert("formData:"+JSON.stringify(h,null,2))},d={input1:function(h){h&&h.length>2?o.setSchemaByPath("obj1.select",function(v){var P=v.enumNames;return{enumNames:P.map(function(j){return j+"a"})}}):o.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return u.default.createElement("div",null,u.default.createElement(c.default,{form:o,schema:m,onFinish:n,watch:d}),u.default.createElement(r.default,{type:"",style:{marginRight:8},onClick:function(){return o.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),u.default.createElement(r.default,{type:"primary",onClick:o.submit},"\u63D0\u4EA4"))},D=t,s.abrupt("return",D);case 24:case"end":return s.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
      placeholder: '\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165',
    },
    input2: {
      title: '\u7B80\u5355\u8F93\u5165\u68462',
      type: 'string',
    },
    obj1: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        select: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          widget: 'radio',
        },
      },
    },
  },
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errorFields) => {
    if (errorFields.length > 0) {
      alert('errorFields:' + JSON.stringify(errorFields));
    } else {
      alert('formData:' + JSON.stringify(formData, null, 2));
    }
  };

  const watch = {
    input1: val => {
      if (val && val.length > 2) {
        form.setSchemaByPath('obj1.select', ({ enumNames }) => {
          return {
            enumNames: enumNames.map(item => item + 'a'),
          };
        });
      } else {
        form.setSchemaByPath('obj1.select', { enumNames: ['\u65E9', '\u4E2D', '\u665A'] });
      }
    },
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        onFinish={onFinish}
        watch={watch}
      />
      <Button
        type=""
        style={{ marginRight: 8 }}
        onClick={() =>
          form.setSchemaByPath('input2', {
            title: '\u7F16\u8F91\u6846',
            format: 'textarea',
          })
        }
      >
        \u5C06 input \u6539\u4E3A textarea
      </Button>
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a,m,t,D,R,s,p;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=function(i,h){if(!h&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var v=m(h);if(v&&v.has(i))return v.get(i);var P={},j=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var F in i)if(F!=="default"&&Object.prototype.hasOwnProperty.call(i,F)){var N=j?Object.getOwnPropertyDescriptor(i,F):null;N&&(N.get||N.set)?Object.defineProperty(P,F,N):P[F]=i[F]}return P.default=i,v&&v.set(i,P),P},m=function(i){if(typeof WeakMap!="function")return null;var h=new WeakMap,v=new WeakMap;return(m=function(j){return j?v:h})(i)},l=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=l,n.next=8,e.e(2).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,r=(0,n.t0)(n.t1),n.next=12,Promise.all([e.e(3),e.e(15)]).then(e.t.bind(null,"cUip",7));case 12:return n.t2=l,n.next=15,Promise.all([e.e(0),e.e(2),e.e(13),e.e(17)]).then(e.t.bind(null,"iJl9",7));case 15:return n.t3=n.sent,u=(0,n.t2)(n.t3),n.t4=l,n.next=20,e.e(69).then(e.bind(null,"0Owb"));case 20:return n.t5=n.sent,c=(0,n.t4)(n.t5),n.t6=l,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,f=(0,n.t6)(n.t7),n.t8=t,n.next=30,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(6)]).then(e.bind(null,"refC"));case 30:return n.t9=n.sent,a=(0,n.t8)(n.t9),D={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},R=function(i){return console.log("widget props:",i),f.default.createElement(u.default,(0,c.default)({addonBefore:"https://",addonAfter:".com"},i))},s=function(){var i=(0,a.useForm)();return f.default.createElement("div",null,f.default.createElement(a.default,{form:i,schema:D,widgets:{site:R},onFinish:function(v){return alert(JSON.stringify(v,null,2))}}),f.default.createElement(r.default,{type:"primary",onClick:i.submit},"\u63D0\u4EA4"))},p=s,n.abrupt("return",p);case 37:case"end":return n.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Input, Button } from 'antd';
import Form, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6',
      type: 'string',
      widget: 'site',
    },
    select: {
      title: '\u5355\u9009',
      type: 'number',
      enum: [1, 2, 3],
      enumNames: ['\u9009\u98791', '\u9009\u98792', '\u9009\u98793'],
    },
  },
};

const SiteInput = props => {
  console.log('widget props:', props);
  return <Input addonBefore="https://" addonAfter=".com" {...props} />;
};

const Demo = () => {
  const form = useForm();
  return (
    <div>
      <Form
        form={form}
        schema={schema}
        widgets={{ site: SiteInput }}
        onFinish={formData => alert(JSON.stringify(formData, null, 2))}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f;return y.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return l=e("K+nK"),m.t0=l,m.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return m.t1=m.sent,r=(0,m.t0)(m.t1),m.t2=l,m.next=9,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(12)]).then(e.bind(null,"c2mQ"));case 9:return m.t3=m.sent,u=(0,m.t2)(m.t3),m.next=13,e.e(18).then(e.bind(null,"8iYR"));case 13:return c=m.sent,f=function(){return r.default.createElement(u.default,{schema:c.titleTrick})},m.abrupt("return",f);case 16:case"end":return m.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:$},"json/schema.js":{import:"../json/schema",content:V}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"form-render-dependencies":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){return y.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(19)]).then(e.bind(null,"ODQR"));case 2:return r.abrupt("return",r.sent.default);case 3:case"end":return r.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:X}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.13.5"},react:{version:">=16.8.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-dependencies"}},"form-render-listexpression":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){return y.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(19)]).then(e.bind(null,"5OWw"));case 2:return r.abrupt("return",r.sent.default);case 3:case"end":return r.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:H}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.13.5"},react:{version:">=16.8.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-listexpression"}},"form-render-doublebind":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){return y.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(19)]).then(e.bind(null,"Xjjr"));case 2:return r.abrupt("return",r.sent.default);case 3:case"end":return r.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:Y}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.13.5"},react:{version:">=16.8.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-doublebind"}},"form-render-rightpath":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){return y.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(19)]).then(e.bind(null,"bD0a"));case 2:return r.abrupt("return",r.sent.default);case 3:case"end":return r.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:U}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.13.5"},react:{version:">=16.8.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-rightpath"}},"form-render-custommessage":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){return y.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(19)]).then(e.bind(null,"yBrT"));case 2:return r.abrupt("return",r.sent.default);case 3:case"end":return r.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:Z}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.13.5"},react:{version:">=16.8.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-custommessage"}},"generator-modal":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){return y.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(19)]).then(e.bind(null,"Xmwd"));case 2:return r.abrupt("return",r.sent.default);case 3:case"end":return r.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:q}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},"fr-generator":{version:"2.7.8"},react:{version:">=16.14.0"},"react-dom":{version:">=16.14.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){return y.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(19)]).then(e.bind(null,"CpJK"));case 2:return r.abrupt("return",r.sent.default);case 3:case"end":return r.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:x}},dependencies:{"fr-generator":{version:"2.7.8"},react:{version:">=16.14.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.14.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){return y.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(19)]).then(e.bind(null,"YELL"));case 2:return r.abrupt("return",r.sent.default);case 3:case"end":return r.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:k},"index.less":{import:"./index.less",content:J}},dependencies:{"fr-generator":{version:"2.7.8"},react:{version:">=16.14.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.14.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){return y.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(19)]).then(e.bind(null,"zDh9"));case 2:return r.abrupt("return",r.sent.default);case 3:case"end":return r.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:_}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},"fr-generator":{version:"2.7.8"},react:{version:">=16.14.0"},"react-dom":{version:">=16.14.0"}},identifier:"generator-transformer"}},"generator-demo":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l=e("K+nK"),t.t0=l,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,r=(0,t.t0)(t.t1),t.t2=l,t.next=9,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(63)]).then(e.bind(null,"nYSz"));case 9:return t.t3=t.sent,u=(0,t.t2)(t.t3),c={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},f=function(){return r.default.createElement("div",{style:{height:"80vh"}},r.default.createElement(u.default,{defaultValue:c}))},a=f,t.abrupt("return",a);case 15:case"end":return t.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Generator from 'fr-generator';

const defaultValue = {
  type: 'object',
  properties: {
    inputName: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
    },
  },
};

const Demo = () => {
  return (
    <div style={{ height: '80vh' }}>
      <Generator defaultValue={defaultValue} />
    </div>
  );
};

export default Demo;`}},dependencies:{react:{version:">=16.14.0"},"fr-generator":{version:"2.7.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.14.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-playground":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){return y.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(19)]).then(e.bind(null,"taff"));case 2:return r.abrupt("return",r.sent.default);case 3:case"end":return r.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:ee},"index.less":{import:"./index.less",content:J}},dependencies:{"fr-generator":{version:"2.7.8"},react:{version:">=16.14.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.14.0"}},identifier:"generator-playground"}},"docs-playground":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){return y.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(19)]).then(e.bind(null,"BASV"));case 2:return r.abrupt("return",r.sent.default);case 3:case"end":return r.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:ne},"index.css":{import:"./index.css",content:te},"main.js":{import:"./main",content:re},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:ae},"json/simplest.json":{import:"./json/simplest.json",content:se},"monaco/index.js":{import:"./monaco",content:ie},"monaco/theme.css":{import:"./theme.css",content:oe}},dependencies:{antd:{version:"4.21.3",css:"antd/dist/antd.css"},react:{version:"*"},"react-dom":{version:"*"},"form-render":{version:"1.13.5"},"json-parse-better-errors":{version:"1.0.2"},"fetch-jsonp":{version:"1.2.1"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.2"},prismjs:{version:"1.28.0"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){return y.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(19)]).then(e.bind(null,"7ZP+"));case 2:return r.abrupt("return",r.sent.default);case 3:case"end":return r.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:le}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},"@ant-design/icons":{version:"4.7.0"},react:{version:">=16.8.0"},"table-render":{version:"1.3.6"},"umi-request":{version:"1.4.0"},"react-dom":{version:">=16.0.0"}},transform:!0,defaultShowCode:!1,background:"rgb(245,245,245)",identifier:"table-render-advanced"}},"table-render-nosearch":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){return y.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(19)]).then(e.bind(null,"CfUQ"));case 2:return r.abrupt("return",r.sent.default);case 3:case"end":return r.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:ue}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},"@ant-design/icons":{version:"4.7.0"},react:{version:">=16.8.0"},"table-render":{version:"1.3.6"},"umi-request":{version:"1.4.0"},"react-dom":{version:">=16.0.0"}},transform:!0,defaultShowCode:!1,background:"rgb(245,245,245)",identifier:"table-render-nosearch"}},"table-render-notitle":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){return y.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(19)]).then(e.bind(null,"/usH"));case 2:return r.abrupt("return",r.sent.default);case 3:case"end":return r.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:de}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},"@ant-design/icons":{version:"4.7.0"},react:{version:">=16.8.0"},"table-render":{version:"1.3.6"},"umi-request":{version:"1.4.0"},"react-dom":{version:">=16.0.0"}},transform:!0,defaultShowCode:!1,background:"rgb(245,245,245)",identifier:"table-render-notitle"}},"table-render-paramtable":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){return y.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(19)]).then(e.bind(null,"48jF"));case 2:return r.abrupt("return",r.sent.default);case 3:case"end":return r.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:me}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},"@ant-design/icons":{version:"4.7.0"},react:{version:">=16.8.0"},"table-render":{version:"1.3.6"},umi:{version:"3.5.26"},"umi-request":{version:"1.4.0"},"react-dom":{version:">=16.0.0"}},transform:!0,defaultShowCode:!1,background:"rgb(245,245,245)",identifier:"table-render-paramtable"}},"table-render-usets":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){return y.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(19)]).then(e.bind(null,"rnjr"));case 2:return r.abrupt("return",r.sent.default);case 3:case"end":return r.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:pe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},"@ant-design/icons":{version:"4.7.0"},react:{version:">=16.8.0"},"table-render":{version:"1.3.6"},"umi-request":{version:"1.4.0"},"react-dom":{version:">=16.0.0"}},transform:!0,defaultShowCode:!1,background:"rgb(245,245,245)",identifier:"table-render-usets"}},"table-render-error":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){return y.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(19)]).then(e.bind(null,"WeJr"));case 2:return r.abrupt("return",r.sent.default);case 3:case"end":return r.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:ce}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.3.6"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!1,background:"rgb(245,245,245)",identifier:"table-render-error"}},"table-render-demo":{component:Object(C.c)({loader:function(){var g=Object(S.a)(y.a.mark(function O(){var l,r,u,c,f,a,m,t,D;return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return l=e("K+nK"),s.t0=l,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,r=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(1),e.e(3),e.e(2),e.e(62)]).then(e.bind(null,"osAV"));case 8:for(u=s.sent,c=[],f=0;f<6;f++)c.push({id:f.toString(),title:"\u6807\u9898".concat(f+1),created_at:new Date().getTime()});return a={type:"object",properties:{title:{title:"\u6807\u9898",type:"string",width:"30%",labelWidth:45},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date",width:"30%"}}},m=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(o,n){return r.default.createElement("a",{onClick:function(){return alert(o.title)}},"\u7F16\u8F91")}}],t=function(){var o=function(){return{rows:c,total:c.length}};return r.default.createElement(r.default.Fragment,null,r.default.createElement(u.Search,{schema:a,api:o}),r.default.createElement(u.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:m,rowKey:"id"}))},D=(0,u.withTable)(t),s.abrupt("return",D);case 16:case"end":return s.stop()}},O)}));function b(){return g.apply(this,arguments)}return b}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Table, Search, withTable } from 'table-render';

const dataSource = [];
for (let i = 0; i < 6; i++) {
  dataSource.push({
    id: i.toString(),
    title: \`\u6807\u9898\${i + 1}\`,
    created_at: new Date().getTime(),
  });
}

// \u8BE6\u7EC6\u53EF\u89C1 form-render \u7684\u4F7F\u7528
const schema = {
  type: 'object',
  properties: {
    title: {
      title: '\u6807\u9898',
      type: 'string',
      width: '30%',
      labelWidth: 45
    },
    created_at: {
      title: '\u521B\u5EFA\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '30%',
    },
  },
};

// \u914D\u7F6E\u5B8C\u5168\u900F\u4F20 antd table
const columns = [
  {
    title: '\u6807\u9898',
    dataIndex: 'title',
  },
  {
    title: '\u521B\u5EFA\u65F6\u95F4',
    key: 'since',
    dataIndex: 'created_at',
    valueType: 'date',
  },
  {
    title: '\u64CD\u4F5C',
    render: (row, record) => <a onClick={() => alert(row.title)}>\u7F16\u8F91</a>,
  },
];

const Wrapper = () => {
  const searchApi = () => {
    return {
      rows: dataSource,
      total: dataSource.length,
    };
  };
  return (
    <>
      <Search schema={schema} api={searchApi} />
      <Table headerTitle="\u6700\u7B80\u8868\u683C" columns={columns} rowKey="id" />
    </>
  );
};

export default withTable(Wrapper);`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.3.6"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!1,background:"rgb(245,245,245)",identifier:"table-render-demo"}}},he=e("Zs1V"),ve=e("KcUY"),ge=e.n(ve),ye=e("nKUr"),Re=K.default=g=>Object(ye.jsx)(ge.a,Object(L.a)(Object(L.a)({},g),{},{config:G,demos:fe,apis:he}))},RGYn:function(W){W.exports=JSON.parse('{"menus":{"zh-CN":{"*":[{"path":"/","title":"\u9996\u9875","meta":{}}],"/chart-render":[{"path":"/chart-render","title":"\u4F7F\u7528\u6559\u7A0B","meta":{"order":1}},{"title":"\u6848\u4F8B\u5C55\u793A","meta":{"order":2,"__fallback":true},"children":[{"path":"/chart-render/demo/line","title":"\u6298\u7EBF\u56FE","meta":{"order":2}},{"path":"/chart-render/demo/column","title":"\u67F1\u72B6\u56FE","meta":{"order":3}},{"path":"/chart-render/demo/pivot-table","title":"\u4EA4\u53C9\u8868","meta":{"order":4}}]},{"path":"/chart-render/faq","title":"\u5E38\u89C1\u95EE\u9898","meta":{"order":5}}],"/form-render":[{"path":"/form-render","title":"\u5F00\u59CB\u4F7F\u7528","meta":{"order":1}},{"path":"/form-render/tutorial","title":"\u6559\u7A0B","meta":{"order":1}},{"title":"\u9AD8\u7EA7\u7528\u6CD5","meta":{"order":3,"__fallback":true},"children":[{"path":"/form-render/advanced/function","title":"\u8868\u5355\u8054\u52A8","meta":{"order":1}},{"path":"/form-render/advanced/widget","title":"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF08widget\uFF09","meta":{"order":2}},{"path":"/form-render/advanced/mapping","title":"\u8986\u76D6\u9ED8\u8BA4\u7EC4\u4EF6\uFF08mapping\uFF09","meta":{"order":3}},{"path":"/form-render/advanced/form-methods","title":"\u8868\u5355\u65B9\u6CD5\uFF08form\uFF09","meta":{"order":4}},{"path":"/form-render/advanced/watch","title":"\u8868\u5355\u76D1\u542C\uFF08watch\uFF09","meta":{"order":5}},{"path":"/form-render/advanced/life-cycle","title":"\u751F\u547D\u5468\u671F (\u52A0\u8F7D - \u63D0\u4EA4)","meta":{"order":6}},{"path":"/form-render/advanced/list-display","title":"\u5217\u8868\u7684\u5C55\u793A","meta":{"order":7}},{"path":"/form-render/advanced/display","title":"\u5C55\u793A\u7684\u6700\u4F73\u5B9E\u8DF5","meta":{"order":8}},{"path":"/form-render/advanced/measure","title":"\u8868\u5355\u5065\u5EB7\u5EA6 & \u63D0\u6548","meta":{"order":9}}]},{"title":"\u793A\u4F8B","meta":{"order":4,"__fallback":true},"children":[{"path":"/form-render/demos","title":"\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5B8C\u6210\u590D\u6742\u8054\u52A8","meta":{"order":1}},{"path":"/form-render/demos/index1","title":"\u5217\u8868\u8054\u52A8","meta":{"order":2}},{"path":"/form-render/demos/index2","title":"\u53CC\u5411\u7ED1\u5B9A","meta":{"order":3}},{"path":"/form-render/demos/index3","title":"\u5982\u4F55\u6B63\u786E\u4E66\u5199 path","meta":{"order":4}},{"path":"/form-render/demos/index4","title":"\u5B9A\u5236\u5C55\u793A\u6821\u9A8C\u4FE1\u606F","meta":{"order":4}},{"path":"/form-render/demos/testing","title":"\u9519\u8BEF\u6392\u67E5\u6280\u5DE7","meta":{"order":9}}]},{"title":"API","meta":{"order":6,"__fallback":true},"children":[{"path":"/form-render/api/props","title":"Props","meta":{"order":1}},{"path":"/form-render/api/schema","title":"Schema","meta":{"order":2}},{"path":"/form-render/api/inner-widget","title":"\u5185\u7F6E\u7EC4\u4EF6","meta":{"order":3}}]},{"path":"/form-render/faq","title":"\u5E38\u89C1\u95EE\u9898","meta":{"order":7}}],"/generator":[{"path":"/generator","title":"\u5982\u4F55\u4F7F\u7528","meta":{"order":1}},{"path":"/generator/playground","title":"Playground","meta":{"order":2}},{"path":"/generator/demo","title":"\u6848\u4F8B\u6F14\u793A","meta":{"order":3}},{"path":"/generator/faq","title":"\u5E38\u89C1\u95EE\u9898","meta":{"order":4}}],"/playground":[{"path":"/playground","title":"Playground","meta":{"order":1}}],"/table-render":[{"path":"/table-render","title":"\u4F7F\u7528\u6559\u7A0B","meta":{"order":1}},{"path":"/table-render/demo","title":"\u6848\u4F8B\u5C55\u793A","meta":{"order":2}},{"path":"/table-render/faq","title":"\u5E38\u89C1\u95EE\u9898","meta":{"order":4}}],"/tools":[{"title":"PropToSchema","meta":{"__fallback":true},"children":[],"path":"/tools/proptypes"},{"title":"VSCode \u63D2\u4EF6","meta":{"__fallback":true},"children":[],"path":"/tools/vscode"}]}},"locales":[{"name":"zh-CN","label":"\u4E2D\u6587"}],"navs":{"zh-CN":[{"title":"FormRender","path":"/form-render"},{"title":"TableRender","path":"/table-render"},{"title":"ChartRender","path":"/chart-render"},{"title":"\u8868\u5355\u8BBE\u8BA1\u5668","path":"/generator"},{"title":"Playground","path":"/playground"},{"title":"\u5468\u8FB9\u5DE5\u5177","path":"/tools","children":[{"title":"PropToSchema","path":"/tools/proptypes"},{"title":"VSCode \u63D2\u4EF6","path":"/tools/vscode"},{"title":"\u65E7\u7248\u6587\u6863","path":"https://x-components.gitee.io/form-render/"}]},{"title":"\u66F4\u65B0\u65E5\u5FD7","children":[{"title":"FormRender","path":"https://github.com/alibaba/x-render/blob/master/packages/form-render/CHANGELOG.md"},{"title":"TableRender","path":"https://github.com/alibaba/x-render/blob/master/packages/table-render/CHANGELOG.md"},{"title":"ChartRender","path":"https://github.com/alibaba/x-render/blob/master/packages/chart-render/CHANGELOG.md"}]},{"title":"GitHub","path":"https://github.com/alibaba/x-render"}]},"title":"XRender","logo":"https://img.alicdn.com/tfs/TB17UtINiLaK1RjSZFxXXamPFXa-606-643.png","mode":"site","repository":{"url":"https://github.com/alibaba/x-render","branch":"master","platform":"github"},"theme":{},"exportStatic":{}}')},Zs1V:function(W){W.exports=JSON.parse("{}")}}]);
