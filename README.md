#expo-ts-base

step 1:

```
yarn
```

step 2:

```
yarn start
```

##Ways to use Intl
Option1: Use FormattedMessage (Recommend)

```
<Text>
  <FormattedMessage id={"welcome.label"} />
</Text>
```

Option2: HOC

call hock

```
const intl = useIntl()
```

then using

```
<Text>
  {intl.formatMessage({
      id: "welcome.label",
  })}
</Text>
```

option3: Using injectIntl (same with connect of Redux)

cover this Screen

```
export default injectIntl(Screen);
```

then get intl from props

```
const {intl} = props
```

then using

```
<Text>
  {intl.formatMessage({
      id: "welcome.label",
  })}
</Text>
```
